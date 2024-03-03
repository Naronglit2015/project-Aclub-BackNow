const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authController = require('../controller/auth-controller')
const authproductscontroller = require('../controller/products-controller')
const authcontrollerTableReservation = require('../controller/TableReservation-controller')
const PurchaseController = require('../controller/purchase-controller');


router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/me', authenticate, authController.getme) 
router.get('/product', authenticate, authproductscontroller.getProduct) 
router.post('/TableReservation', authenticate, authcontrollerTableReservation.createTableReservation) 
router.post('/purchase', authenticate, PurchaseController.purchaseProduct);
router.post('/postproduct', authenticate, authproductscontroller.postProduct);
router.get('/getpurchase', authenticate, PurchaseController.getpurchase);
router.get('/tableReser', authenticate, authcontrollerTableReservation.getTableReservation);


module.exports = router