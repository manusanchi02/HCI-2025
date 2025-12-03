<template>
    <div :class="$style.bacheca">
        <Header title="Bacheca" :enable-back="false"></Header>
        <div :class="$style.content">
            <div :class="$style.itemParent">
                <MarketItem v-for="(item, index) in marketItems" :key="index" :image="item.image" :title="item.name"
                    :username="item.user" :price="item.price" :expiryDate="item.expirationDate"
                    :uploadDate="item.uploadDate" />
            </div>
        </div>
        <nav-bar></nav-bar>
    </div>
</template>
<script lang="ts">
import Header from '../components/Header.vue';
import NavBar from '../components/NavBar.vue';
import MarketItem from '../components/MarketItem.vue';
import { getData } from '../utils/storage.js';

export default {
    components: {
        Header,
        NavBar,
        MarketItem
    },
    data() {
        return {
            marketItems: []
        }
    },
    mounted() {
        const data = getData();
        if (data && data.market) {
            this.marketItems = data.market;
        }
    },
    methods: {
    },
}
</script>
<style module>
.bacheca {
    width: 100%;
    height: 933px;
    position: relative;
    background-color: #f2f4f2;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    font-size: 14px;
    color: #1d1b20;
    font-family: Roboto;
}

.content {
    align-self: stretch;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 18px;
    box-sizing: border-box;
    font-size: 20px;
    color: #003027;
}

.itemParent {
    align-self: stretch;
    flex: 1;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px 7px;
    justify-content: start;
    align-content: start;
}
</style>