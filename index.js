// nodejs

// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.end("hello Node!!");
//   })
//   .listen(3000);

// ---------------------------------------------

// expressjs

// const express = require("express");
// const app = express();

// // middleware --
// app.use((req, res, next) => {
//   console.log("url : ", req.url);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("I am another middlewear");
//   next();
// });
// // --middleware

// // routing --
// app.get("/", (req, res) => {
//   //   console.log("req", req);
//   //   console.log("res", res);
//   res.end("helo Express!! ");
// });

// app.get("/login", (req, res) => {
//   res.end("I am Login");
// });

// app.get("*", (req, res) => {
//   res.end("Page was not founded");
// });
// // -- routing

// app.listen(3000, () => {
//   console.log("Server is running...");
// });

// ---------------------------------------------

// expressjs
// morgan

const express = require("express");
const morgan = require("morgan");
const app = express();

// settings ---
app.set("appName", "My first server");
app.set("appOwner", "Gustavo");
// -- settings

// middleware --
app.use(morgan("dev"));
app.use(morgan("combined"));
app.use((req, res, next) => {
  console.log(app.get("appName"));
  console.log(app.get("appOwner"));
  next();
});
// --middleware

// routing --
app.get("/", (req, res) => {
  res.end("helo Express!! ");
});

app.get("/login", (req, res) => {
  res.end("I am Login");
});

app.get("*", (req, res) => {
  res.end("Page was not founded");
});
// -- routing

app.listen(3000, () => {
  console.log("Server is running...");
});
