import { MutationTree } from 'vuex';
import { GuestState } from './types';
import { snackBarModel } from '@/utils/snackbar.model';

export const mutations: MutationTree<GuestState> = {
    setName: (state, val : String) =>  {
        state.name = val
    },
};