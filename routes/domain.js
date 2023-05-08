import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Enter your Domain Id: ");
});

let domainList = [
  {
    id: 1,
    domain: "Front-End Developer",
  },
  {
    id: 2,
    domain: "Back-End Developer",
  },
  {
    id: 3,
    domain: "Full Stack Developer",
  },
  {
    id: 4,
    domain: "Mern Stack Developer",
  },
  {
    id: 5,
    domain: "Technician",
  },
];
route.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const output = domainList.find((domain) => domain.id === id);
  console.log(id);
  if (output) {
    res.send("Your Domain Name is " + '"' + output.domain + '"');
  } else {
    res.json("Invalid Domain Id. Please Re-check your Id :)");
  }
});
export default route;
