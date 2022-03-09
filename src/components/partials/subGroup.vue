<template>
    <div class="sub-group" :style="`background-image: url('http://134.209.230.113:8588/images/${$route.query.groupType}:${group.GroupCode}:Default.jpg');`">
        <h4>{{group.GroupName}}</h4>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:['group']
})
</script>

<style scoped src="@/assets/scss/partials/sub-group.css">