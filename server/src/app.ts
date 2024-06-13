import express, { Application } from "express";
import { corsHeaders } from "./middlewares/cors.middleware";
import { ownersRouter } from "./routes/owners.router";
import { authRouter } from "./routes/auth.router";

const app: Application = express();

app.use(express.urlencoded());

app.use(express.json());

app.use(corsHeaders);

app.use('/owners', ownersRouter);
app.use('/auth', authRouter);

export { app };