import { GetterTree } from "vuex";
import { UiState } from "./types";
import { snackBarModel } from '@/utils/snackbar.model';
import { RootState } from "../types";

export const getters: GetterTree<UiState, RootState> = {
  snackBar(state): snackBarModel {
    return state.snackBar;
  },
  guestModal(state): boolean {
    return state.guestModal;
  },
  mainGroup(state): string {
    return state.mainGroup;
  },
  subGroup(state): string | null {
    return state.subGroup;
  },

};
