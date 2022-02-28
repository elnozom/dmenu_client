<template>
  <div id="app">
    <snack />
    <app-nav @openCart="openCart"/>
    <div class="view">
      <router-view/>
    </div>
    <bottom-sheet max-height="80%" ref="cart">
      <cart/>
    </bottom-sheet>
   
  </div>
</template>
<script>
import Vue from 'vue'
import snack from '@/components/utils/snack.vue'
import appNav from '@/components/layouts/appNav.vue'
import cart from '@/components/cart/cart.vue'
import  VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
export default Vue.extend({
  components:{
    snack,
    "bottom-sheet": VueBottomSheet,
    "app-nav" : appNav,
    cart
  },
  methods:{
    openCart() {
      this.$refs.cart.open();
    },
  }
})
</script>
<style src="@/assets/scss/global/global.css"/>