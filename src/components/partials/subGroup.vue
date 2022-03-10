<template>
    <div class="sub-group" :style="`background-image: url('https://elrady.co/images/${$store.getters['ui/mainGroup']}:${group.GroupCode}:Default.jpg');`">
        <h4>{{group.GroupName}}</h4>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:['group'],
    data(){
        const groupType:string = "1"
        return {
            groupType 
        }
    },
    mounted(){
       this.groupType = this.$route.query.groupType  ? this.$route.query.groupType as string : "1"
    },
})
</script>

<style scoped src="@/assets/scss/partials/sub-group.css">