const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const order = require('../../models/order');


router.get('/cart', ordersCtrl.cart);

router.post('/cart/products/:id', ordersCtrl.addToCart);

router.put('/cart/qty', ordersCtrl.setProductQtyInCart);

router.post('/cart/checkout', ordersCtrl.checkout);

router.get('/orders', ordersCtrl.getPastOrders);

router.post('/createPaymentIntent', ordersCtrl.createPaymentIntent);

router.get('/total-price', ordersCtrl.getOrderTotal);

module.exports = router;
