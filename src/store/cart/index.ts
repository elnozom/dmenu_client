import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { CartState } from './types';
import { RootState } from '../types';

export const state: CartState = {
    loading: false,
    items : [],
};

const namespaced: boolean = true;

export const cart: Module<CartState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};