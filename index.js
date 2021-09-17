const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const globalConfigs = require("./routes/globalConfigs");
const customers = require("./routes/customers");
const catalog = require("./routes/catalog");
const products = require("./routes/products");
const colors = require("./routes/colors");
const sizes = require("./routes/sizes");
const filters = require("./routes/filters");
const subscribers = require("./routes/subscribers");
const cart = require("./routes/cart");
const orders = require("./routes/orders");
const links = require("./routes/links");
const pages = require("./routes/pages");
const slides = require("./routes/slides");
const wishlist = require("./routes/wishlist");
const comments = require("./routes/comments");
const shippingMethods = require("./routes/shippingMethods");
const paymentMethods = require("./routes/paymentMethods");
const partners = require("./routes/partners");
// const mainRoute = require("./routes/index");

const app = express();
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
async function start() {
  try {
      await mongoose
  .set("useNewUrlParser", true)
  .set("useFindAndModify", false)
  .set("useCreateIndex", true)
  .set("useUnifiedTopology", true)  
  .connect(db)
  // .connect('mongodb+srv://kuzovik1:123321@cluster0.oj12a.mongodb.net/fem4?retryWrites=true&w=majority')
  console.log("MongoDB Connected");
  
  const port = process.env.PORT || 5000

   app.listen(port, () => console.log(`Server running on port ${port}`));
  
      }
      //сначала запускаем базу потом сервер
   
  
  catch (e) {
      console.log(e)
  }
}
start()
// mongoose
//   .set("useNewUrlParser", true)
//   .set("useFindAndModify", false)
//   .set("useCreateIndex", true)
//   .set("useUnifiedTopology", true)  
//   .connect(db)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/configs", globalConfigs);
app.use("/customers", customers);
app.use("/catalog", catalog);
app.use("/products", products);
app.use("/colors", colors);
app.use("/sizes", sizes);
app.use("/filters", filters);
app.use("/subscribers", subscribers);
app.use("/cart", cart);
app.use("/orders", orders);
app.use("/links", links);
app.use("/pages", pages);
app.use("/slides", slides);
app.use("/wishlist", wishlist);
app.use("/comments", comments);
app.use("/shipping-methods", shippingMethods);
app.use("/payment-methods", paymentMethods);
app.use("/partners", partners);
// app.use("/", mainRoute);

// NGINX Serves static files.
// This is in case no route match is found to redirect to index and show 404 with React-Router.

process.env.NODE_ENV="production";
// process.env.NODE_ENV="development";

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server running on port ${port}`));
