import { Router } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";


const router = Router();
// --- Rotas User --
router.post('/user', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

export { router };