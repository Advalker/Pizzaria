import { Request, Response } from 'express';
import { CreatProductService } from '../../services/product/CreatProductService'


class CreatProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;

        const createProductService = new CreatProductService();

        if (!req.file) {
            throw new Error("error upload file")
        } else {
            const { originalname, filename: banner } = req.file;



            const product = await createProductService.execute({

                name,
                price,
                description,
                banner,
                category_id,
            });

            return res.json(product);

        }


    }
}

export { CreatProductController }

