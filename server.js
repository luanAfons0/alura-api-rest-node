import express from "express";
import "dotenv/config.js";
import app from "./src/app.js";

const server = express();

server.use(app);

server.listen(process.env.PORT, () => {
    console.log(`O servidor está rodando na porta ${process.env.PORT}...`);
});