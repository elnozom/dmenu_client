import ItemInterface from "./item.interface";
import { Item, Group, MainGroup } from "./item.model";
import Api from '@/utils/Api';
const Http = Api.getInstance();
export default class IetmRepo implements ItemInterface{
    itemPrefix  = "item"
    grouPrefix  = "group"
    mainGroup  = 0
    table  = 0
    subGroup = 0
    setMainGroup(val : number){
        this.mainGroup = val
    }
    setSubGroup(val : number){
        this.subGroup = val
    }
    setTable(val : number){
        this.table = val
    }
    listItems(): Promise<Array<Item>> {
        return new Promise((resolve ,reject) => {
            Http.get(`${this.itemPrefix}/${this.subGroup}/${this.table}`)
            .then((res:any) => {
                resolve(res)
            }).catch((e) => {
                reject(e)
            })
        })
    }
    listGroups():  Promise<Array<Group>> {
        return new Promise((resolve ,reject) => {
            Http.get(`${this.grouPrefix}/${this.mainGroup}`)
            .then((res:any) => {
                resolve(res)
            }).catch((e) => {
                reject(e)
            })
        })
    }
    listMainGroups():  Promise<Array<MainGroup>>{
        return new Promise((resolve ,reject) => {
            Http.get(`${this.grouPrefix}`)
            .then((res:any) => {
                resolve(res)
            }).catch((e) => {
                reject(e)
            })
        })
    }

}