import {Request, Response} from 'express';
import { ListOrderService } from '../../services/order/ListOrderService';


class ListOrderController{
    async handle(req:Request, res:Response){
        const lisOrderService = new ListOrderService();
        const order = await lisOrderService.execute()

        return res.json(order)
    }
}

export { ListOrderController }