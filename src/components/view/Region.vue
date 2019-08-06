<template>
  <div>
    <div>
      <app-header></app-header>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <h1>REGION</h1>
          <div class="list-group">
            <div  @click="reload">
              <router-link
                v-for="region in regionList"
                :key="region.index"
                class="list-group-item list-group-item-action w-100 h-100"
                replace
                :to="'/region/'+region.toLowerCase()"
              >
               {{region}}
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-10 ">
          <h2 class="text-center">
            Countries in
            <span class="text-danger">{{this.$route.params.region.toUpperCase()}}</span>
          </h2>
          <div class="row justify-content-center">
            <div v-for="nation in getRegionNation" :key="nation.index">
              <router-link
                :to="'country/' + nation.alpha3Code.toLowerCase()"
                class="text-dark custom"
              >
                <app-item :nation="nation"></app-item>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="container" />
    <app-footer class="mt-2 mb-2"></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/common/Header.vue";
import AppFooter from "@/components/common/Footer.vue";
import AppItem from "@/components/common/Item.vue";
export default {
  name: "Region",
  components: {
    AppHeader,
    AppItem,
    AppFooter
  },
  data() {
    return {
      regionList: ["Africa", "Americas", "Asia", "Europe", "Oceania"]
    };
  },
  computed: {
    getRegionNation() {
      return this.$store.getters.regionNation;
    }
  },
  methods: {
    reload() {
      location.reload();
    }
  },
  created() {
    return this.$store.dispatch("GET_REGION_NATION", this.$route.params.region);
  }
};
</script>

<style scoped>
.router-link-active{
  background:#8cd46f;
  color:black;
}
</style>
