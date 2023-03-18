import express = require("express");
import Routes from "./routes/Index";
const app = express();
import './configs/env';
import cors = require("cors");

app.use(cors());

app.use(express.json())
Routes(app)

export { app }