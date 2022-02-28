import {Item , MainGroup ,Group} from './item.model'

export default  interface ItemInterface  {
    listItems(mainGroupSerial: number , subGroupSerial: number): Promise<Array<Item>>;
    listGroups(mainGroupSerial: number): Promise<Array<Group>>;
    listMainGroups(): Promise<Array<MainGroup>>;
}