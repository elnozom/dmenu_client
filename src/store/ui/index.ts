import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { UiState } from './types';
import { RootState } from '../types';

export const state: UiState = {
    loading: true,
    guestModal: true,
    mainGroup: "1",
    subGroup: null,
    snackBar:{
        Active : false,
        Title : "",
        Msg : "",
    }
};

const namespaced: boolean = true;

export const ui: Module<UiState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};