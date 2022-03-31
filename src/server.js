import express from "express";

const PORT = 4000;
const app = express();

app.get("/", () => console.log("Go home."));




const handleListening = () => console.log(`server port : ${PORT}`);

app.listen(PORT, handleListening)