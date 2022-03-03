import GuestInerface from "./guest.interface";
import { Guest } from "./guest.model";
import Api from '@/utils/Api';
const Http = Api.getInstance();
export default class GuestRepo implements GuestInerface {
    prefix = "guests"
   
    create(req: Guest): Promise<Guest> {
        return new Promise((resolve , reject) => {
            Http.post(`${this.prefix}` , req)
            .then((res:any) => {
                resolve(res)
            })
            .catch((e:any) => {
                reject(e)
            })
        })
    }
    findByDevice(device:string): Promise<Guest> {
        return new Promise((resolve , reject) => {
            Http.get(`${this.prefix}/${device}`)
            .then((res:any) => {
                resolve(res)
            })
            .catch((e:any) => {
                reject(e)
            })
        })
    }
    
}
