<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>
