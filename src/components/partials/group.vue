<template>
    <div class="group">
        <img src="@/assets/img/g1.webp" :alt="group.GroupName">
        <h3>{{group.GroupName}}</h3>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:['group']
})
</script>

<style scoped src="@/assets/scss/partials/group.css">