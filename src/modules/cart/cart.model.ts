export type CartItem = {
    CartSerial: number,
    CartItemSerial: number,
    Qnt: number,
    Price: number,
    ItemSerial: number,
    ItemName: String,
    IsMod: boolean,
    MainModSerial: number,
    AddItems: String
}

export type CreateCartReq = {
    CustomerSerial: number,
    DeviceId: String,
    TableSerial: number
}

export type CreateCartItemReq = {
    ItemSerial: number,
    CartSerial: number,
    Price: number
}

export type TotalsModel = {
    Subtotal: number,
    Total: number,
    Tax: number
    
}
