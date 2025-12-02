<script>
import router from "./router";

export default {
  mounted() {
    if (this.$router && this.$router.replace) {
      this.$router.replace("/");
    }
  },
};
</script>

<template>
  <div id="app" class="flex flex-col items-center w-full">
    <!-- Testing Navbar -->
    <nav class="w-full bg-gray-800 text-white p-4">
      <div class="flex flex-wrap gap-2 justify-center">
        <router-link
          to="/"
          class="text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 rounded bg-gray-700 hover:bg-gray-600"
          >Home</router-link
        >
        <router-link
          to="/day-details"
          class="text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 rounded bg-gray-600 hover:bg-gray-500"
          >Day Details</router-link
        >
        <router-link
          to="/recipie-details"
          class="text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 rounded bg-gray-600 hover:bg-gray-500"
          >Recipie Details</router-link
        >
        <router-link
          to="/login"
          class="text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 rounded bg-gray-600 hover:bg-gray-500"
          >Login</router-link
        >
        <router-link
          to="/profile"
          class="text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 rounded bg-gray-600 hover:bg-gray-500"
          >Profile</router-link
        >
        <router-link
          to="/unexpected/0"
          class="text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 rounded bg-gray-600 hover:bg-gray-500"
          >Imprevisto</router-link
        >
        <router-link
          to="/new-recipe/monday/lunch/manual"
          class="text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 rounded bg-gray-600 hover:bg-gray-500"
          >New Recipe (Manual)</router-link
        >
        <router-link
          to="/new-recipe/monday/lunch/audio"
          class="text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 rounded bg-gray-600 hover:bg-gray-500"
          >New Recipe (Audio)</router-link
        >
      </div>
    </nav>

    <router-view />
  </div>
</template>
