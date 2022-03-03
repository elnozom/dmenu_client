<template>
  <div class="home">
    
    <div class="groups">
      <carousel :perPage="3" :paginationEnabled="false">
        <slide v-for="group in groups"
            :key="group.GroupCode"
            @click="setMainGroup(group.GroupCode)">

         <a href="#"  @click="setMainGroup(group.GroupCode)">
          <group
            :group="group"
          ></group>
         </a>

        </slide>
      </carousel>

    </div>
    <div class="groups">
       <carousel :perPage="3" :paginationEnabled="false">
      <slide v-for="group in subGroups"
          :key="group.GroupCode"
         >
         <a href="#"  @click="setSubGroup(group.GroupCode)">
          <group
            :group="group"
          ></group>
        </a>
      </slide>
      </carousel>
    </div>
    <div class="container">
      <div class="items-grid">
        <item
          v-for="item in items"
          :item="item"
          :key="item.Serial"
        ></item>
      </div>
    </div>
     

  </div>
</template>


<script >
import Vue from "vue";
import group from "@/components/partials/group.vue";
import item from "@/components/partials/item.vue";
import { VueAgile } from "vue-agile";
import ItemRepo from "@/modules/item/item.repo";
import {DeviceUUID} from '@/core/device'
import CartRepo from "@/modules/cart/cart.repo";
import { Carousel, Slide } from 'vue-carousel';
let cartRepo = CartRepo.getInstance();
let repo = new ItemRepo();
export default Vue.extend({
  components: {
    group,
    agile: VueAgile,
    Carousel,
    Slide,
    item,
  },
  computed:{
    table: {
      get: function(){
        return parseInt(this.$route.params.table)
      }
    }
  },  
  methods: {
    setMainGroup(group){
      repo.setMainGroup(group)
      this.listGroups()
    },
    setSubGroup(group){
      repo.setSubGroup(group)
      this.listItems()
    },
   
    listMainGroups() {
      repo.listMainGroups().then((groups) => {
        this.groups = groups
        this.setMainGroup(groups[0].GroupCode)
        this.listGroups()
      })
    },
    
    listGroups() {
      repo.listGroups(group).then((groups) => {
        this.subGroups = groups
        this.setSubGroup(groups[0].GroupCode)
      })
    },
    listItems() {
      repo.listItems().then((items) => {
        this.items = items
      })
    },
  },
  data() {
    return {
      carouselOptions: {
        navButtons: false,
        dots: false,
        slidesToShow: 3,
      },
      groups: [],
      subGroups: [],
      items : []
    };
  },
  mounted() {
      this.listMainGroups()
      repo.setTable(this.table)
      let deviceId= new DeviceUUID().get()
      cartRepo.setDevice(deviceId)
      cartRepo.setTable(this.table)
      cartRepo.listItems().then((res) => {
      console.log("hi")
      this.$store.commit('cart/init' , res)
    })
  },
});
</script>

<style  src="@/assets/scss/pages/home.css">