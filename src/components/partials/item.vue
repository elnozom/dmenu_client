<template>
<div>
    <div class="item-skelton skelton" v-if="loading"></div>
    <div class="item" v-else>
        <div class="img" >
            <img :src="`https://elrady.co/images/${$store.getters['ui/mainGroup']}:${$store.getters['ui/subGroup']}:Default.jpg`" :alt="item.ItemName">
        </div>
        <div class="info">
            <h3>{{item.ItemName}}</h3>
            <p>{{item.ItemDesc}}</p>
            <div class="info-bottom">
                <p class="price">{{item.ItemPrice | price}}</p>
                <a href="#" @click.prevent="addItemToCart(item)"  v-if="$route.name != 'initial'">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/></svg>
                </a>
                <!-- <div class="qnt" v-else>
                    <svg  class="qnt-svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M0 12v1h23v-1H0z"/></svg>
                    <input class="qnt-input"  disabled v-model="item.Qnt">
                    <svg class="qnt-svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/></svg>
                </div> -->
                
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {Item , convertToCart} from '@/modules/item/item.model'
import Vue from 'vue'
import {  CreateCartItemReq } from "@/modules/cart/cart.model";
import CartRepo from "@/modules/cart/cart.repo";
let repo =  CartRepo.getInstance();
import {openSnack} from '@/core/snack'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
Vue.use(VueViewer)
export default Vue.extend({
    props:['item' , 'loading'],
    data(){
        const groupType:string = "1"
        return {
            inCart:false,
            groupType
        }
    },
    mounted(){
       this.groupType = this.$route.query.groupType  ? this.$route.query.groupType as string : "1"
    },
    methods:{
        // show() {
        //     this.$viewerApi({
        //     images: ['https://oddmenu.com:3000/image/126628348688563.jpg'],
        //     })
        // },
        createCartInstance(item : Item) {
            repo.create().then(() => {
                this.addItemToCart(item);
            })
        },
        addItemToCart(item:Item){
            if(repo.cartSerial == 0) {
                this.createCartInstance(item)
                return
            }            let req : CreateCartItemReq = {
              ItemSerial: item.ItemSerial,
              CartSerial: 0,
              Price: item.ItemPrice
            }
            repo.createItem(req).then((res) => {
                openSnack("success" , "added to cart successfully")
                this.inCart = true
                this.$store.commit("cart/append" , convertToCart(item , res , repo.cartSerial))
            })
        }
    },
})
</script>

<style scoped src="@/assets/scss/partials/item.css">