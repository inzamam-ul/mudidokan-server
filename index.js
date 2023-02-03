const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Product = require("./models/Product");
const Order = require("./models/Order");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5050;

const uri = `mongodb+srv://chaldaluser:chaldaluser420@cluster0.gbf8e.mongodb.net/chalDalDB?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

app.post("/addProduct", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const data = await newProduct.save();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/products", async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/singleProduct/:id", async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

app.patch("/updateProduct/:id", async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

//Delete data
app.delete("/deleteProduct/:id", async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

app.post("/placeOrder", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const data = await newOrder.save();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/allOrder/:email", async (req, res) => {
  try {
    const data = await Order.find({ email: req.params.email });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`${port}`);
});
