import { MutationTree } from 'vuex';
import { UiState } from './types';
import { snackBarModel } from '@/utils/snackbar.model';

export const mutations: MutationTree<UiState> = {
    setSnack: (state, val : snackBarModel) =>  {
        state.snackBar = val
    },
    setGuestModal: (state, val : boolean) =>  {
        state.guestModal = val
    },
    stopSnack: state => {
        state.snackBar.Active = false
    }
};