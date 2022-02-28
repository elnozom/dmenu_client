<template>
  <div class="home">
    

  </div>
</template>


<script >
import Vue from "vue";
export default Vue.extend({
  created() {
     this.$router.push({name : "Home" , params:{table:1}})
  },
});
</script>

<style  src="@/assets/scss/pages/home.css">