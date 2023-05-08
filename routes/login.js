import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Login Page Comming Soon");
});
export default route;
