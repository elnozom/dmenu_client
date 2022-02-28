import { CartItem } from '@/modules/cart/cart.model';
import {TotalsModel} from '@/modules/cart/cart.model'
export interface CartState {
  loading: boolean;
  items: CartItem[];
}
