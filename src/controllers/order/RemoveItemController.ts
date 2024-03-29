import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController {
    async handle(req: Request, res: Response) {
        const item_id = req.query.item_id as string;

        const removeItemService = new RemoveItemService();

        const order = await removeItemService.execute({
            item_id
        })

        return res.json(order);
    }
}

export { RemoveItemController }