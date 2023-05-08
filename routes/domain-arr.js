import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Enter your Domain Id: ");
});

let domainList = [
  {
    domain: "Front-End Developer",
  },
  {
    domain: "Back-End Developer",
  },
  {
    domain: "Full Stack Developer",
  },
  {
    domain: "Mern Stack Developer",
  },
  {
    domain: "Technician",
  },
];

route.get("/:id", (req, res) => {
  res.send(req.service.domain);
});
route.param("id", (req, res, next, id) => {
  req.service = domainList[id - 1];
  next();
});
export default route;
