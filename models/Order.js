const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);
const orderSchema = mongoose.Schema(
  {
    email: String,
    address: Object,
    date: String,
    orderedProduct: Object,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
