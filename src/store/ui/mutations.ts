import { MutationTree } from 'vuex';
import { UiState } from './types';
import { snackBarModel } from '@/utils/snackbar.model';

export const mutations: MutationTree<UiState> = {
    setSnack: (state, val : snackBarModel) =>  {
        state.snackBar = val
    },
    stopSnack: state => {
        state.snackBar.Active = false
    }
};