<template>
    <div class="cart">
        <loading v-if="loading"/>
        <no-items v-else-if="items.length == 0"/>
        <!-- {{items}} -->
        <div class="cart__wrapper" v-else>

            <div class="cart-items">
                <div class="item">
                    <cart-item v-for="item in items" :key="item.CartItemSerial" :item="item"></cart-item>
                </div>
            </div>
            <div class="totals">
                <div class="totals__wrapper">
                    <div class="total-row">
                        <span>subtotal:</span>
                        <span>{{totals.Subtotal | price}}</span>
                    </div>
                    <div class="total-row">
                        <span>tax:</span>
                        <span>{{totals.Tax | price}}</span>
                    </div>
                    <div class="total-row">
                        <span>total:</span>
                        <span>{{totals.Total | price}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {mapGetters} from 'vuex'
import loading from '@/components/layouts/loading.vue'
import NoItems from '@/components/layouts/noItems.vue'
import CartItem from './cartItem.vue'

export default Vue.extend({
    components:{
        loading,
        "cart-item" : CartItem,
        "no-items" : NoItems
    },
    computed:{
        ...mapGetters({
            'loading' : 'cart/loading',
            'items' : 'cart/items',
            'totals' : 'cart/totals',
        })
    },
    
})
</script>

<style scoped src="@/assets/scss/cart/cart.css">
