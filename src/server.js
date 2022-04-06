import express from "express";
import morgan from "morgan";
import req from "express/lib/request";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const Home = (req, res) => {
    return res.send("I love middlewares");
}

const login = (req, res) => {
    return res.send("login");
}

app.use(logger);
app.get("/", Home);
app.get("/login", login)

const Listening = () => 
console.log(`server port : ${PORT}`);

app.listen(PORT, Listening)