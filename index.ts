import express, { Express } from "express";
import cors from "cors";
import { hello } from "./utils/common";

const app: Express = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello Worlds" });
});

const port = 3000;
app.listen(port, () => {
  console.log("Server Running On Ports: " + port);
  hello();
});
