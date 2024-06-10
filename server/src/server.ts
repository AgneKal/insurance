import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log("Express serveris paleistas, ant uosto "+process.env.PORT);
})