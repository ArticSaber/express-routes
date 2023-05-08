import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Guess a Number");
});

let quote = [
  {
    id: 1,
    luck: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    id: 2,
    luck: "The way to get started is to quit talking and begin doing.",
  },
  {
    id: 3,
    luck: "If life were predictable it would cease to be life, and be without flavor.",
  },
  {
    id: 4,
    luck: "Life is what happens when you're busy making other plans.",
  },
  {
    id: 5,
    luck: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  },
];
route.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const output = quote.find((luck) => luck.id === id);
  console.log(id);
  if (output) {
    res.send("Your Todays Quote will be:  " + '"' + output.luck + '"');
  } else {
    res.json("Invalid Number");
  }
});
export default route;
