import { ActionTree } from "vuex";
import { CartState } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<CartState, RootState> = {
  fetchData(): any {
    console.log("asdasd");
  },
};
