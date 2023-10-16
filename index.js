import express from "express";
import cors from "cors";
import router from "./router.js";

const app = express();
const port = 10000 || 0;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port);
