<template>
    <div :class="$style.bacheca">
        <Header title="Bacheca" :enable-back="false"></Header>
        <div :class="$style.tabsContainer">
            <div 
                :class="[$style.tab, { [$style.activeTab]: activeTab === 'esplora' }]"
                @click="activeTab = 'esplora'"
            >
                Esplora
            </div>
            <div 
                :class="[$style.tab, { [$style.activeTab]: activeTab === 'miei' }]"
                @click="activeTab = 'miei'"
            >
                I miei annunci
            </div>
        </div>
        <div 
            :class="$style.content"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
        >
            <div :class="$style.itemParent">
                <MarketItem v-for="(item, index) in filteredMarketItems" :key="index" :image="item.image" :title="item.name"
                    :username="item.user" :price="item.price" :expiryDate="item.expirationDate"
                    :uploadDate="item.uploadDate" :quantity="item.quantity" />
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
            marketItems: [],
            activeTab: 'esplora',
            currentUser: '',
            touchStartX: 0,
            touchEndX: 0
        }
    },
    computed: {
        filteredMarketItems() {
            if (this.activeTab === 'miei' && this.currentUser) {
                return this.marketItems.filter(item => item.user === this.currentUser);
            }
            return this.marketItems;
        }
    },
    mounted() {
        const data = getData();
        if (data && data.market) {
            this.marketItems = data.market;
        }
        if (data && data.user) {
            this.currentUser = data.user.username || '';
        }
    },
    methods: {
        handleTouchStart(e) {
            this.touchStartX = e.changedTouches[0].screenX;
        },
        handleTouchEnd(e) {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        },
        handleSwipe() {
            const swipeThreshold = 50;
            const diff = this.touchStartX - this.touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0 && this.activeTab === 'esplora') {
                    // Swipe left - vai a "I miei annunci"
                    this.activeTab = 'miei';
                } else if (diff < 0 && this.activeTab === 'miei') {
                    // Swipe right - torna a "Esplora"
                    this.activeTab = 'esplora';
                }
            }
        }
    }
}
</script>
<style module>
.bacheca {
    width: 100%;
    height: 100vh;
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
    overflow-y: auto;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px 7px;
    justify-content: start;
    align-content: start;
    padding-bottom: 18px;
}

.tabsContainer {
    width: 100%;
    background-color: #f2f4f2;
    margin-bottom: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    gap: 0;
    border-bottom: 1px solid #e0e0e0;
    scrollbar-width: none;
    justify-content: center;
}

.tabsContainer::-webkit-scrollbar {
    display: none;
}

.tab {
    flex-shrink: 0;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    color: #707975;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.3s;
    white-space: nowrap;
    text-align: center;
}

.tab:active {
    opacity: 0.7;
}

.activeTab {
    color: #003027;
    border-bottom-color: #003027;
}

</style>