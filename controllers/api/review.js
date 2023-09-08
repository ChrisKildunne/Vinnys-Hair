const Review = require('../../models/review')
const Product = require('../../models/product')


async function create(req, res) {
    try {
        const { text, rating } = req.body;
        const review = await Review.create({
            user: req.user._id,
            text,
            rating,
            product: req.params.productId
        });
        console.log(review);
        res.json(review);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

async function getAll(req, res) {
    try {
        const productId = req.params.productId; 
        const reviews = await Review.find({ product: productId }).populate('user').exec();
        res.json(reviews);
    } catch (err) {
        console.error(err);
    }
}

async function deleteReview(req,res){
    try {
        const productId = req.params.productId; 
        const reviewId = req.params.reviewId
        console.log("this is the review id",reviewId)
        await Review.deleteOne({ _id: reviewId, product: productId})
    }catch(err){
        console.log(err)
    }
}

async function editReview(req,res){
    try{
        const productId = req.params.productId; 
        const reviewId = req.params.reviewId
        const { text, rating } = req.body;
        const existingReview = await Review.findOne({ _id: reviewId, product: productId})
        existingReview.text = text
        existingReview.rating = rating
        await existingReview.save()
        res.json(existingReview)
    }catch(err){
        console.log(err)
    }
}

module.exports ={
    create,
    getAll,
    deleteReview,
    editReview
}