import { Request, Response } from "express";
import { CreateCategoreService } from "../../services/category/CreateCategoreService";

class CreateCategoreController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const createCategoryService = new CreateCategoreService();

        const category = await createCategoryService.execute({
            name
        });

        return res.json(category);

    }
}

export { CreateCategoreController }