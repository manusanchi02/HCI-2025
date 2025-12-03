<script>
export default {
  data() {
    return {
      isNavExpanded: false,
    };
  },
  mounted() {
    if (this.$router && this.$router.replace) {
      this.$router.replace("/");
    }
  },
  methods: {
    toggleNav() {
      this.isNavExpanded = !this.isNavExpanded;
    },
  },
};
</script>

<template>
  <div id="app" class="flex flex-col items-center w-full">
    <!-- Testing Navbar 
    <nav class="w-full bg-gray-800 text-white p-4">
      <button 
        @click="toggleNav" 
        class="w-full mb-1 px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 text-left font-semibold"
      >
        {{ isNavExpanded ? '▼' : '▶' }} Debug Navigation
      </button>
      <div v-show="isNavExpanded" class="flex flex-wrap gap-2 justify-center">
        <router-link
          to="/recipie-details"
          class="text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 rounded bg-gray-600 hover:bg-gray-500"
          >Recipie Details</router-link
        >
        <router-link
          to="/unexpected/0"
          class="text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 rounded bg-gray-600 hover:bg-gray-500"
          >Imprevisto</router-link
        >
      </div>
    </nav>-->

    <router-view />  
  </div>
</template>
