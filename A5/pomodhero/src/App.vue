<script>

export default {
    mounted() {
        if (this.$router && this.$router.replace) {
            // Replace current route with home on app start
            this.$router.replace('/');
        }
    }
};
</script>

<template>
    <div id="app" class="flex flex-col items-center w-full">
        <!-- Testing Navbar -->
        <nav class="w-full bg-gray-800 text-white p-4 mb-4">
            <div class="flex gap-4 justify-center">
                <router-link to="/" class="text-lg font-semibold">Home</router-link>
                <router-link to="/market" class="text-lg font-semibold">Market</router-link>
                <router-link to="/chat-list" class="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500">Chat List</router-link>
                <router-link to="/chat" class="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500">Chat</router-link>
                <router-link to="/market-details" class="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500">Market Details</router-link>
                <router-link to="/day-details" class="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500">Day Details</router-link>
                <router-link to="/recipie-details" class="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500">Recipie Details</router-link>
            </div>
        </nav>

        <!-- Router view: routed components will render here -->
        <router-view />
        
    </div>
</template>
