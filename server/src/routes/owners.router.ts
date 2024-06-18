import express from "express";
import { OwnersController } from "../controllers/owners.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { editOwnerMiddleware } from "../middlewares/edit.owner.middleware";

const ownersRouter = express.Router();

ownersRouter.get('/', authMiddleware, OwnersController.getAll);
ownersRouter.get('/:id', authMiddleware, editOwnerMiddleware, OwnersController.getOwner);
ownersRouter.post('/', authMiddleware, editOwnerMiddleware, OwnersController.insert);
ownersRouter.put('/', authMiddleware, editOwnerMiddleware, OwnersController.update);
ownersRouter.delete('/:id', authMiddleware, editOwnerMiddleware, OwnersController.delete);

export { ownersRouter };