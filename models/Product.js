const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const productSchema = mongoose.Schema(
  {
    name: String,
    price: String,
    weight: String,
    imgUrl: String,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
