import express from "express";
import { editUser, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(":id", see);
userRouter.get("/edit", editUser);
userRouter.get("/logout", logout);
userRouter.get("/remove", remove);

export default userRouter;