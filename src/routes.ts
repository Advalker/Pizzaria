import { Router } from "express";

import multer from "multer";
import { CreateUserController } from "./controllers/user/createUserController";

import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoreController } from "./controllers/category/CreateCategoreController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreatProductController } from './controllers/product/CreatProductController'
import { LisByCategoryController } from './controllers/product/LisByCategoryController'

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// --- Rotas User --
router.post('/user', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

// -- Rotas category
router.post('/category', isAuthenticated, new CreateCategoreController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

// -- Rotas Product
router.post('/product', isAuthenticated, upload.single('file'), new CreatProductController().handle)

router.get('/category/product', isAuthenticated, new LisByCategoryController().handle)

// -- Rotas Order

router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
export { router };