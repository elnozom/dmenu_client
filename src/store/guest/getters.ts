import { GetterTree } from "vuex";
import { GuestState } from "./types";
import { snackBarModel } from '@/utils/snackbar.model';
import { RootState } from "../types";

export const getters: GetterTree<GuestState, RootState> = {
  name(state): String {
    return state.name;
  },

};
