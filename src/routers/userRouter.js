import express from "express";
import { editUser, remove } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", editUser);
userRouter.get("/delete", remove);

export default userRouter;