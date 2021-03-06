import CartInerface from "./cart.interface";
import { CreateCartReq, CartItem , CreateCartItemReq } from "./cart.model";
import Api from '@/utils/Api';
import store from '../../store'
const Http = Api.getInstance();


export default class CartRepo implements CartInerface{
    prefix  = "cart"
    cartSerial = 0
    table  = 0
    deviceId = ''
    private static _instance:CartRepo;
    constructor() {
        if(CartRepo._instance){
            throw new Error("Error: Instantiation failed: Use CartRepo.getInstance() instead of new.");
        }
        CartRepo._instance = this;
    }

    public static getInstance():CartRepo
    {
        return CartRepo._instance;
    }
    setTable(val:number){
        this.table = val
    }
    setDevice(val:string){
        this.deviceId = val
    }
    create(): Promise<boolean> {
        let req: CreateCartReq =  {
            CustomerSerial: 0,
            DeviceId: this.deviceId,
            TableSerial: this.table
        }
        return new Promise((resolve ,reject) => {
            Http.post(`${this.prefix}` , req)
            .then((res:any) => {
                this.cartSerial = res
                resolve(res)
            }).catch((e) => {
                reject(e)
            })
        })
    }
    createItem(req: CreateCartItemReq): Promise<number> {
        req.CartSerial = this.cartSerial
        return new Promise((resolve ,reject) => {
            Http.post(`${this.prefix}/item` , req)
            .then((res:any) => {
                resolve(res)
            }).catch((e) => {
                reject(e)
            })
        })
    }
    listItems(): Promise<CartItem[]> {
        return new Promise((resolve ,reject) => {
            Http.get(`${this.prefix}?Table=${this.table}&Device=${this.deviceId}`)
            .then((res:any) => {
                if(res != null) this.cartSerial = res[0]['CartSerial']
                resolve(res)
            }).catch((e) => {
                reject(e)
            })
        })
    }
    deleteItem(serial: number): Promise<boolean> {
        return new Promise((resolve ,reject) => {
            Http.delete(`${this.prefix}/${serial}`)
            .then((res:any) => {
                resolve(res)
            }).catch((e) => {
                reject(e)
            })
        })
    }


    makeCall(Type : number): Promise<boolean> {
        const body = {
            CartSerial : this.cartSerial,
            TableSerial : this.table,
            GuestName : store.getters['guest/name'],
            Type,
        }
        console.log(body)
        return new Promise((resolve ,reject) => {
            Http.post(`${this.prefix}/call/` , body)
            .then((res:any) => {
                resolve(res)
            }).catch((e) => {
                reject(e)
            })
        })
    }
}