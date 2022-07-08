import express from "express";
import morgan from "morgan";
import RouterIndex from "../src/Router/routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use('/api',RouterIndex);

export default app;



