<template>
  <div class="home">
   
      <div class="container">
        <div class="items_wrapper">
          <div class="info">
            <img src="@/assets/logo-2.png" alt="">
            <h2 class="title">
              Wave digital menu
            </h2>
              <p class="header-info">
                
                &copy; Powered by El Nozom digital menus. <a href="http://elnozom.com" target="_blank">www.elnozom.com</a></p>
             
            <!--   <p class="header-info"><svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M12 20a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 12 20zm-3.659-3.254A5.973 5.973 0 0 1 12 15.5c1.376 0 2.645.464 3.657 1.245l-.572.821c-.85-.667-1.921-1.066-3.085-1.066s-2.237.399-3.087 1.068l-.572-.822zm-2.859-4.105A10.943 10.943 0 0 1 12 10.5c2.437 0 4.691.794 6.515 2.139l-.572.821A9.945 9.945 0 0 0 12 11.5a9.947 9.947 0 0 0-5.946 1.962l-.572-.821zM2.624 8.537A15.923 15.923 0 0 1 12 5.5c3.499 0 6.737 1.125 9.371 3.034l-.571.821A14.92 14.92 0 0 0 12 6.5c-3.288 0-6.331 1.06-8.804 2.858l-.572-.821zM0 4.769A20.895 20.895 0 0 1 12 1a20.89 20.89 0 0 1 11.994 3.765l-.571.82A19.904 19.904 0 0 0 12 2 19.902 19.902 0 0 0 .571 5.589L0 4.769z" />
                </svg>
                WiFi_Password123</p> -->

            </div>

          <div class="main-groups">
            <carousel
              :perPage="2"
              :paginationEnabled="false"
            >
              <slide
                v-for="group in groups"
                :key="group.GroupCode"
                @click="setMainGroup(group.GroupCode)"
              >

                <a
                  href="#"
                  @click="setMainGroup(group.GroupCode)"
                >
                  <group
                    :class="{'active' : group.GroupCode == activeGroup}"
                    :group="group"
                  ></group>
                </a>

              </slide>
            </carousel>
          </div>
          <div class="sub-groups" v-if="!showItems">
            <a
              href="#"
              class="sub-group-wrapper"
              v-for="group in subGroups"
              :key="group.GroupCode"
              @click="setSubGroup(group.GroupCode , group.GroupName)"
            >
              <sub-group :group="group"></sub-group>
            </a>
          </div>
          <div class="items" v-else>
            <h2>{{subGroupName}}</h2>
            <item
              v-for="item in items"
              :item="item"
              :key="item.Serial"
            ></item>
          </div>
        </div>
      </div>
          <!-- <a class="scroll" href="#" @click.prevent="window.scrollTo({ top: 0, behavior: 'smooth' });">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"><path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z" /></svg>
            <span>up</span>
          </a> -->
        <div v-if="!cartEmpty" class="bottom" @click.prevent="$refs.cart.open()">
          <a href="#">show my order</a>
          <!-- <a href="#">
            <img src="@/assets/img/cheque.png">
            <span>cheque</span>
          </a> -->
        </div>

        <bottom-sheet max-height="80%" ref="cart">
          <cart/>
        </bottom-sheet>
   

  </div>
</template>


<script >
import Vue from "vue";
import group from "@/components/partials/group.vue";
import subGroup from "@/components/partials/subGroup.vue";
import item from "@/components/partials/item.vue";
import { VueAgile } from "vue-agile";
import ItemRepo from "@/modules/item/item.repo";
import { DeviceUUID } from "@/core/device";
import CartRepo from "@/modules/cart/cart.repo";
import cart from '@/components/cart/cart.vue'
import  VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import { Carousel, Slide } from "vue-carousel";
import { mapGetters } from "vuex";
import pushParams from '@/core/params.js'
let cartRepo = CartRepo.getInstance();
let repo = new ItemRepo();
export default Vue.extend({
  components: {
    group,
    "sub-group": subGroup,
    agile: VueAgile,
    Carousel,
    cart,
    "bottom-sheet": VueBottomSheet,
    Slide,
    item,
  },
  computed: {
    table: {
      get: function () {
        return parseInt(this.$route.params.table);
      },
    },
    ...mapGetters({
      "cartEmpty" : "cart/cartEmpty"
    })
  },
  methods: {
    setMainGroup(group) {
      pushParams(this.$route , {groupType : group} , 'group')
      this.activeGroup = group;
      this.showItems = false
      repo.setMainGroup(group);
      this.$store.commit('ui/setMainGroup' , group.toString())
      this.listGroups();
    },
    setSubGroup(group , name) {
      pushParams(this.$route , {group})
      repo.setSubGroup(group);
      this.subGroupName = name
      this.$store.commit('ui/setSubGroup' , group.toString())
      this.showItems = true
      this.listItems();
    },

    listMainGroups() {
      repo.listMainGroups().then((groups) => {
        this.groups = groups;
        let urlGroupType = this.$route.query.groupType
        const code = urlGroupType ? urlGroupType : groups[0].GroupCode
        this.setMainGroup(code);
        this.listGroups();
      });
    },

    listGroups() {
      repo.listGroups(group).then((groups) => {
        this.subGroups = groups
        let urlGroup = this.$route.query.group
        if(urlGroup) this.setSubGroup(urlGroup)
      });
    },
    listItems() {
      repo.listItems().then((items) => {
        this.items = items;
      });
    },
  },
  data() {
    return {
      carouselOptions: {
        navButtons: false,
        dots: false,
        slidesToShow: 1,
      },
      groups: [],
      subGroups: [],
      items: [],
      activeGroup: 0,
      showItems:false,
      subGroupName:""
    };
  },
  mounted() {
    this.listMainGroups();
    repo.setTable(this.table);
    let deviceId = new DeviceUUID().get();
    cartRepo.setDevice(deviceId);
    cartRepo.setTable(this.table);
    cartRepo.listItems().then((res) => {
      console.log("hi");
      this.$store.commit("cart/init", res);
    });
  },
});
</script>

<style  src="@/assets/scss/pages/home.css">