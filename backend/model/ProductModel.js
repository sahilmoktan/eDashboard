const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add the productname"],
    },
    price: {
      type: String,
      required: [true, "please add the product price"],
      
    },
    category: {
      type: String,
    },
    userId: {
      type: String,
    },
    company: {
      type: String,
    }
  }
  
);

module.exports = mongoose.model("products", productSchema);
