<template>
    <div class="item">
        <div class="info">
            <h3>{{item.ItemName}}</h3>
            <p>{{item.ItemDesc}}</p>
            <p class="price">{{item.ItemPrice | price}}</p>
            <a href="#" @click.prevent="addItemToCart(item)">add to cart</a>
        </div>
        <div class="img">
            <img src="@/assets/img/i1.webp" :alt="item.ItemName">
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

export default Vue.extend({
    props:['item'],
    methods:{
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
                this.$store.commit("cart/append" , convertToCart(item , res , repo.cartSerial))
            })
        }
    },
})
</script>

<style scoped src="@/assets/scss/partials/item.css">