import "./db";
import "./models/Video";
import app  from "./server";

const PORT = 4000;

const Listening = () => 
console.log(`server port : ${PORT}`);

app.listen(PORT, Listening)