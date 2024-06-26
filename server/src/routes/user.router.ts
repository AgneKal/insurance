import express  from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";
import { UserController } from "../controllers/user.controller";


const userRouter=express.Router();

userRouter.get("/", authMiddleware, adminMiddleware, UserController.getAll);
userRouter.get("/:id",authMiddleware, UserController.getUser);
userRouter.put("/:id", authMiddleware, UserController.update);
userRouter.delete("/:id", authMiddleware, adminMiddleware, UserController.delete);

export {userRouter};