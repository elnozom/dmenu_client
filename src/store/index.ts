import Vue from 'vue'
import { RootState } from "./types";
import { guest } from "./guest/index";
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
    cart,
    guest
  },
};

export default new Vuex.Store<RootState>(store);
