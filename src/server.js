import express from "express";
import morgan from "morgan";
import global from "./routers/globalRouter";
import user from "./routers/userRouter";
import video from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.use(logger);
app.use("/", global);
app.use("/videos", video);
app.use("/users", user);

const Listening = () => 
console.log(`server port : ${PORT}`);

app.listen(PORT, Listening)