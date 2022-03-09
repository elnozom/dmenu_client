import { CartItem } from '@/modules/cart/cart.model';
import { GetterTree } from "vuex";
import { CartState } from "./types";
import { RootState } from "../types";
import {TotalsModel} from '@/modules/cart/cart.model'

export const getters: GetterTree<CartState, RootState> = {
  loading(state): boolean {
    return state.loading;
  },
  items(state): Array<CartItem> {
    return state.items == null ? [] : state.items;
  },
  
  count(state):number{
    return  state.items == null ? 0 : state.items.length
  },
  totals(state):TotalsModel {
    let subtotal = 0
    let tax = 0
    let total = 0

    state.items.map((item : CartItem) => {
      subtotal += item.Price
    })
    tax = subtotal * 0
    total = subtotal + tax
    return {
      Subtotal :subtotal,
      Tax:tax,
      Total:total,
    }
  },
  cartEmpty(state) : boolean {
    return state.items == null;
  }
  // totals(state):TotalsModel{
  //   return state.totals;
  // },
};
