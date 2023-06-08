import { Router } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoreController } from "./controllers/category/CreateCategoreController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreatProductController } from './controllers/product/CreatProductControle'
import { isAuthenticated } from './middlewares/isAuthenticated'


const router = Router();
// --- Rotas User --
router.post('/user', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

// -- Rotas category
router.post('/category', isAuthenticated, new CreateCategoreController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

// Rotas Product
router.post('/product', isAuthenticated, new CreatProductController().handle)


export { router };