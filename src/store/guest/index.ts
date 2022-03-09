import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { GuestState } from './types';
import { RootState } from '../types';

export const state: GuestState = {
    name : "",
};

const namespaced: boolean = true;

export const guest: Module<GuestState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};