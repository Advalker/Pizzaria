import { Request, Response } from 'express';
import { CreatProductService } from '../../services/product/CreatProductService'


class CreatProductController {
    async handle(req: Request, res: Response) {
        const { name, prince, description, category_id } = req.body;

        let banner = '';
        const createProductService = new CreatProductService();

        const product = createProductService.execute({

            name,
            prince,
            description,
            banner,
            category_id

        });

        res.json(product);

    }
}

export { CreatProductController }