import express from "express";
import config from "config"
import connect from "../database/connection";
import logger from "../utils/logger";
import productsRoutes from "../routes/products.routes";
import cors from "cors"

const port = config.get<number>("port")
const app = express();

// Server & Routes

app.use(express.json());
app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
app.listen(port, async () => {
    logger.info(`App is running at port ${port}`)
    await connect();
    productsRoutes(app)
})