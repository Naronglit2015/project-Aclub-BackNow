const db = require("../models/db");

exports.purchaseProduct = async (req, res, next) => {
  try {
    const { name, description, price, table, quantity, paymentMethod,img } = req.body;
    const userId = req.user.id;

    const purchase = await db.purchase.create({
      data: {
        name,
        description,
        price,
        table: String(table),
        quantity: parseFloat(quantity), // เพิ่ม quantity เข้าไป
        payment: paymentMethod, // เพิ่ม payment เข้าไป
        userId,
        img,
      },
    });

    res.json({ message: "Purchase successful", purchase });
  } catch (error) {
    next(error);
  }
};


exports.getpurchase = async (req, res, next) => {
  try {

    if (req.user.role === "ADMIN") {
      const purchases = await db.purchase.findMany();
      res.json(purchases)
    } else {
      const purchases = await db.purchase.findMany({
        where: {
          userId: req.user.id
        }
      });
      res.json(purchases);
    }

  } catch (error) {
    next(error);
  }
};

