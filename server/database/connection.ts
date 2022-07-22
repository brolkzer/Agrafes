import mongoose, { mongo } from "mongoose";
import config from "config";
import logger from "../utils/logger";

async function connect () {
    const dbUri = config.get<string>('dbUri')

    try {
        await mongoose.connect(dbUri);
        logger.info('Connected to MongoDB')
    } catch (error) {
        logger.error("Could not connect to MongoDB" + error);
        process.exit(1)
    }
}

export default connect