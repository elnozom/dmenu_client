import { snackBarModel } from '@/utils/snackbar.model';
import Vue from 'vue'
import { RootState } from "./types";
import { ui } from "./ui/index";
import { cart } from "./cart/index";
import Vuex,  { StoreOptions } from 'vuex'
Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0", // a simple property
  },
  modules: {
    ui,
    cart
  },
};

export default new Vuex.Store<RootState>(store);
