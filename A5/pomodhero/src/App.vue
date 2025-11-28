<script>
import ChatListView from './views/ChatListView.vue';
import ChatView from './views/ChatView.vue';
import Market from './views/MarketView.vue';
import MarketDetailsView from './views/MarketDetailsView.vue';
import HomeView from './views/HomeView.vue';
import DayDetails from './views/DayDetails.vue';
import RecipieDetails from './views/RecipieDetails.vue';

export default {
    components: { 
        ChatListView,
        ChatView,
        Market,
        MarketDetailsView,
        HomeView,
        DayDetails,
        RecipieDetails
    },
    data() {
        return {
            currentView: 'ChatListView'
        }
    },
    methods: {
        setView(viewName) {
            this.currentView = viewName;
        }
    }
};
</script>

<template>
    <div id="app" class="flex flex-col items-center w-full">
        <!-- Testing Navbar -->
        <nav class="w-full bg-gray-800 text-white p-4 mb-4">
            <div class="flex gap-4 justify-center">
                <button 
                    @click="setView('ChatListView')"
                    :class="['px-4 py-2 rounded', currentView === 'ChatListView' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500']"
                >
                    Chat List
                </button>
                <button 
                    @click="setView('ChatView')"
                    :class="['px-4 py-2 rounded', currentView === 'ChatView' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500']"
                >
                    Chat
                </button>
                <button 
                    @click="setView('Market')"
                    :class="['px-4 py-2 rounded', currentView === 'Market' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500']"
                >
                    Market
                </button>
                <button 
                    @click="setView('MarketDetailsView')"
                    :class="['px-4 py-2 rounded', currentView === 'MarketDetailsView' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500']"
                >
                    Market Details
                </button>
                <button 
                    @click="setView('HomeView')"
                    :class="['px-4 py-2 rounded', currentView === 'HomeView' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500']"
                >
                    Home View
                </button>
                <button 
                    @click="setView('DayDetails')"
                    :class="['px-4 py-2 rounded', currentView === 'DayDetails' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500']"
                >
                    Day Details
                </button>
                <button 
                    @click="setView('RecipieDetails')"
                    :class="['px-4 py-2 rounded', currentView === 'RecipieDetails' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500']"
                >
                    Recipie Details
                </button>
            </div>
        </nav>

        <!-- Dynamic Component Container -->
        <component :is="currentView"></component>
    </div>
</template>
