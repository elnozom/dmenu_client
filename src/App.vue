<template>
  <div id="app" ref="app">
    <snack />
    <app-nav/>
    <div class="">
      <router-view/>
    <guest-modal/>
    </div>
    
    <div class="scroll-top">

    </div>
   
  </div>
</template>
<script>
import Vue from 'vue'
import snack from '@/components/utils/snack.vue'
import AppNav from '@/components/layouts/appNav.vue'
import GuestModal from '@/components/modals/guest.vue'
import cart from '@/components/cart/cart.vue'
import  VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
export default Vue.extend({
  components:{
    snack,
    "bottom-sheet": VueBottomSheet,
    "app-nav" : AppNav,
    "guest-modal" : GuestModal,
    cart
  },
  methods:{
    openCart() {
      this.$refs.cart.open();
    },
  },
  mounted(){
    console.log('mn')
    const modeProp = localStorage.getItem('mode')
    const mode = modeProp ? modeProp : 'dark'
    this.$refs.app.classList.add(mode)
  }
})
</script>
<style src="@/assets/scss/global/global.css"/>