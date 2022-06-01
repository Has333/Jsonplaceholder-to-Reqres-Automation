import { DatabaseConnect } from './src/databases/database.js';
import { JsonplaceholderToReqresAutomation } from './src/jobs/cron.js';
import express from 'express';
import "dotenv/config.js";

const PORT = process.env.PORT || 3000;
const server = express();

DatabaseConnect();
JsonplaceholderToReqresAutomation();

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
