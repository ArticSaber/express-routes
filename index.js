import express from "express";

import about from "./routes/about.js";
import json from "./routes/json.js";
import login from "./routes/login.js";
import contact from "./routes/contact.js";
import domain from "./routes/domain.js"; 

const app = express();

app.get("/", (req, res) => {
    res.send("Home page");
});

app.use("/about", about);
app.use("/json", json);
app.use("/login", login);
app.use("/contact", contact);
app.use("/domain", domain);

app.listen(3000, () => {
  console.log("Server is running");
});
