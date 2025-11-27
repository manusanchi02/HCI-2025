<script>
import ChatElenco from './views/ChatListView.vue';
    export default {
        components: { "chat-elenco": ChatElenco },
        data() {
            return {}
        },
        methods: {
        }
    };
</script>

<template>
    <div id="app" class="flex flex-col items-center">
        <chat-elenco></chat-elenco>
    </div>
</template>
