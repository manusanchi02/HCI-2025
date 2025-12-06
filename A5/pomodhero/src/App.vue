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
    <router-view />  
  </div>
</template>
