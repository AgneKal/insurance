import express, { Application } from "express";
import { corsHeaders } from "./middlewares/cors.middleware";
import { ownersRouter } from "./routes/owners.router";

const app: Application = express();

app.use(express.urlencoded());

app.use(express.json());

app.use(corsHeaders);

app.use('/owners', ownersRouter);

export { app };