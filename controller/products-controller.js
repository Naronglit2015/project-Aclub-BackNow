const db = require('../models/db')

exports.getProduct = async (req, res, next) => {
    try {
      const products = await db.Product.findMany();
      res.json(products);
    } catch (error) {
      next(error);
    }
  };
  
  exports.postProduct = async (req, res, next) => {
    try {
      const { name, description, price, img } = req.body;
  
      const product = await db.Product.create({
        data: {
          name,
          description,
          price: parseFloat(price),
          img
        },
      });
  
      res.json({ message: "Product created successfully", product });
    } catch (error) {
      next(error);
    }
  };
  
