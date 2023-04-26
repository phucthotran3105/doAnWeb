<script>
import Noteheader from "./components/header.vue";
import FooterView from "./components/footer.vue";

export default {
  components: {
    Noteheader,
    FooterView
  },
};
</script>

<template>
  <Noteheader class="Header" />
  
  <router-view />

  <FooterView></FooterView>
</template>

<style  scoped>

.page {
  max-width: 400px;
  margin: auto;
}

.Header{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
}

.mt-6{
  margin-top: 7rem!important;
}

</style>