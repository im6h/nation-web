<template>
  <div>
    <div>
      <app-header></app-header>
    </div>
    <div class="container mt-3" id="body-custom">
      <h3 class="text-center">Nations of the world: {{getAllNation.length}}</h3>
      <div class="row justify-content-center">
        <div v-for="nation in getAllNation" :key="nation.index">
          <router-link :to="'country/' + nation.alpha3Code.toLowerCase()" class="text-dark custom">
            <app-item :nation="nation"></app-item>
          </router-link>
        </div>
      </div>
    </div>
    <!-- float-button -->
    <div>
      <div class="float" @click="show = !show">
        <i class="material-icons mt-2">search</i>
      </div>
      <ul v-show="show">
        <li class="non-style">
          <div class="fab-name row" >
            <span class="text-dark">
              <i class="material-icons m-2">text_format</i>
            </span>
            <span class="mt-2">Name</span>
          </div>
        </li>
        <li class="non-style">
          <router-link class="fab-area row" to="/region/africa">
            <span class="text-dark">
              <i class="material-icons m-2">location_on</i>
            </span>
            <span class="mt-2">Region</span>
          </router-link>
        </li>
        <li class="non-style">
          <div>
            <div class="fab-code row">
              <span class="text-dark">
                <i class="material-icons m-2">code</i>
              </span>
              <span class="mt-2">Code</span>
            </div>
          </div>
        </li>
      </ul>
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
      nations: {},
      show: false
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

  methods: {
    
  },
  created() {
    return this.$store.dispatch("ALL_NATION");
  }
};
</script>

<style scoped>
.non-style{
  list-style-type: none;
}
.float {
  position: fixed;
  width: 45px;
  height: 45px;
  bottom: 40px;
  right: 40px;
  background-color: #0c9;
  color: #fff;
  border-radius: 50px;
  text-align: center;
}
.fab-name {
  position: fixed;
  width: 100px;
  height: 45px;
  bottom: 160px;
  right: 40px;
  background-color: #0c9;
  color: #fff;
  border-radius: 10px;
  text-align: center;
}
.fab-name:hover{
  text-decoration: none;
}
.fab-area {
  position: fixed;
  width: 100px;
  height: 45px;
  bottom: 100px;
  right: 40px;
  background-color: #0c9;
  color: #fff;
  border-radius: 10px;
  text-align: center;
}
.fab-area:hover{
  text-decoration: none;
}
.fab-code {
  position: fixed;
  width: 100px;
  height: 45px;
  bottom: 220px;
  right: 40px;
  background-color: #0c9;
  color: #fff;
  border-radius: 10px;
  text-align: center;
}
.fab-code:hover{
  text-decoration: none;
}
.my-float {
  margin-top: 22px;
}
.custom:hover {
  text-decoration: none;
}
</style>
