import { CartItem } from '@/modules/cart/cart.model';
import { MutationTree } from 'vuex';
import { CartState } from './types';

export const mutations: MutationTree<CartState> = {
    init : (state:CartState,items:CartItem[]) => {
        state.items= items
    },
    append:(state:CartState, item:CartItem) => {
        if(state.items == null) {
            state.items = [item]
            return
        }
        state.items.push(item)
    },
    remove:(state:CartState, item:CartItem) => {
        console.log(state.items.indexOf(item))
        state.items.splice(state.items.indexOf(item) , 1)
    },
    increase:(state:CartState, item:CartItem) => {
        let current = state.items.filter((i:CartItem) => i == item)
        console.log(current)
    },
    decrease:(state:CartState, item:CartItem) => {
        let current = state.items.filter((i:CartItem) => i == item)
        console.log(current)
    }
};