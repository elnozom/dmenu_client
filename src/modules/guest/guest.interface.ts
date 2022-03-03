import {Guest} from './guest.model'

export default  interface GuestInerface  {
    create(req: Guest): Promise<Guest>;
    findByDevice(device:string): Promise<Guest>;
}