import { Request, Response } from "express";
import { LisByCategoryService } from "../../services/product/ListByCategoryService";


class LisByCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const listByCategory = new LisByCategoryService();

        const product = await listByCategory.execute({
            category_id
        });

        return res.json(product);
    }
}

export { LisByCategoryController }