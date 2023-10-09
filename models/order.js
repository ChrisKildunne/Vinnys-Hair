const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema');


const lineItemSchema = new Schema ({
    qty: {type: Number, default: 1},
    product: productSchema
},{
    timestamps: true,
    toJSON: { virtuals : true}
})

lineItemSchema.virtual('extPrice').get(function () {
    if (!this.product) return 0;  // return 0 or some default value if product is null
    console.log(this.product)
    return this.qty * this.product.price;
});



const orderSchema = new Schema({
    cartId: {type: String, required: true},
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false},

},{
    timestamps: true,
    toJSON: { virtuals: true}
})


orderSchema.virtual('orderTotal').get( function () {
    return this.lineItems.reduce((total, product) => total + product.extPrice, 0)
})
orderSchema.virtual('totalQty').get( function () {
    return this.lineItems.reduce((total,product) => total + product.qty, 0)
})
orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
})

orderSchema.methods.addItemToCart = async function(productId){
    console.log(productId)
    const existingProduct = this.lineItems.find((product) => product.product._id.equals(productId));
    if(existingProduct){
        existingProduct.qty += 1;
    } else {
        const product = await mongoose.model('Product').findById(productId);
        this.lineItems.push({ product })
    }
    await this.save()
}

orderSchema.methods.setProductQty = function (productId, newQty) {
    const existingProduct = this.lineItems.find((existingProduct) =>
      existingProduct.product._id.equals(productId)
    );
    
    if (existingProduct) {
      if (newQty <= 0) {
       
        existingProduct.deleteOne();
      } else {
        existingProduct.qty = newQty;
      }
    }
    
    return this.save();
  };
  

orderSchema.statics.getCart = function(cartId) {
    return this.findOneAndUpdate(
        { cartId: cartId, isPaid: false },
        {},
        { upsert: true, new: true}
    );
};

module.exports = mongoose.model('Order', orderSchema)