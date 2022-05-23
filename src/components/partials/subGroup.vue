<template>
    <div>
    <div v-if="loading" class="sub-group-skelton skelton" >
    </div>
    <div v-else class="sub-group" :style="`background-image: url('${imgPath}${$store.getters['ui/mainGroup']}:${group.GroupCode}:Default.jpg');`">
        <h4>{{group.GroupName}}</h4>
    </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:['group' , 'loading'],
    data(){
        const groupType:string = "1"
        return {
            groupType ,
            imgPath : process.env.VUE_APP_IMG_URL
        }
    },
    mounted(){
       this.groupType = this.$route.query.groupType  ? this.$route.query.groupType as string : "1"
    },
})
</script>

<style scoped src="@/assets/scss/partials/sub-group.css">