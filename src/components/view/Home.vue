<template>
  <div>
    <div>
      <app-header></app-header>
    </div>
    <div class="container mt-5" id="body-custom">
      <h3 class="text-center">Nations of the world: {{getAllNation.length}}</h3>
      <div class="row justify-content-md-center">
        <div v-for="nation in getAllNation" :key="nation.index">
          <router-link :to="'callingcode/' + nation.callingCodes" class="text-dark">
            <app-item :nation="nation"></app-item>
          </router-link>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/common/Header.vue";
import AppFooter from "@/components/common/Footer.vue";
import AppItem from "@/components/common/Item.vue";
export default {
  name: "Home",
  data() {
    return {
      nations: {}
    };
  },
  components: {
    AppHeader,
    AppItem,
    AppFooter
  },
  computed: {
    getAllNation() {
      return this.$store.getters.allNation;
    }
  },

  methods: {},
  created() {
    return this.$store.dispatch("ALL_NATION");
  }
};
</script>

<style scoped>
</style>
