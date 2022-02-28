import {CartItem , CreateCartReq} from './cart.model'

export default  interface CartInerface  {
    create(req: CreateCartReq): Promise<Boolean>;
    listItems(serial: number): Promise<Array<CartItem>>;
    deleteItem(serial: number): Promise<Boolean>;
}