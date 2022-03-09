import { CartItem } from '@/modules/cart/cart.model';
export type Item = {
    CartItemSerial: number,
    Qnt: number,
    ItemPrice: number,
    ItemSerial: number,
    ItemName: String,
    ImagePath: String,
    IsMod: boolean,
    MainModSerial: number,
    AddItems: String
}


export type MainGroup = {
    GroupCode: number,
    GroupName: string,
    Icon: string
}

export type Group = {
    GroupCode: number,
    GroupName: string
    ImagePath: string
}


export const convertToCart = (item:Item , serial:number , cartSerial : number) : CartItem => {
    return {
        CartSerial: cartSerial,
        CartItemSerial: serial,
        Qnt: 1,
        Price: item.ItemPrice,
        ItemSerial: item.ItemSerial,
        ItemName: item.ItemName,
        IsMod: item.IsMod,
        MainModSerial: item.MainModSerial,
        AddItems: item.AddItems,
    }
}