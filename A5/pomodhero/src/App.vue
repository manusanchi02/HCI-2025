<script>
import ChatListView from './views/ChatListView.vue';
import ChatView from './views/ChatView.vue';
import Market from './views/Market.vue';

export default {
    components: { 
        ChatListView,
        ChatView,
        Market
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
            </div>
        </nav>

        <!-- Dynamic Component Container -->
        <component :is="currentView"></component>
    </div>
</template>
