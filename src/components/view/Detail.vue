<template>
  <div class="container">
    <!-- <app-header></app-header> -->
    <div class="jumbotron justify-content-center pl-5 mt-4">
        <div class="col">
            <!-- flag  -->
            <img class="round mx-auto d-block custom-img"
            :src="getDetailNation.flag" :alt="getDetailNation.name">
            <div class="media-body mx-auto ">
                <h2 class="mt-5 text-center">{{getDetailNation.name}}</h2>
                <div class="row container border border-dark">
                    <div class="col text-right my-auto "><p>Capital: </p></div>
                    <div class="col text-left">
                        <p>{{getDetailNation.capital}}</p>
                    </div>
                </div>
                <div class="row container  border border-dark">
                    <div class="col text-right my-auto"><p>Code:</p></div>
                    <div class="col text-left">
                        <div v-for="code in getDetailNation.callingCodes" :key="code.index">
                            <p>{{code}}</p>
                        </div>
                    </div>
                </div>
                <div class="row container border border-dark">
                    <div class="col text-right my-auto "><p>Timezone:</p></div>
                    <div class="col text-left">
                        <div v-for="timezone in getDetailNation.timezones" :key="timezone.index">
                            <p>{{timezone}}</p>
                        </div>
                    </div>
                </div>
                <div class="row container border border-dark">
                    <div class="col text-right my-auto "><p>Languages:</p></div>
                    <div class="col text-left">
                        <div v-for="language in getDetailNation.languages" :key="language.index">
                            <p>{{language.nativeName}}</p>
                        </div>
                    </div>
                </div>
                <div class="row container border border-dark">
                    <div class="col text-right my-auto"><p>Currencies:</p></div>
                    <div class="col text-left">
                        <div v-for="currency in getDetailNation.currencies" :key="currency.index">
                            <p>Code: {{currency.code}}</p>
                            <p>Name: {{currency.name}}</p>
                            <p>Symbol: {{currency.symbol}}</p>
                        </div>
                    </div>
                </div>
                <div class="row container border border-dark">
                    <div class="col text-right my-auto"><p>Borders:</p></div>
                    <div class="col text-left">
                        <div v-for="border in getDetailNation.borders" :key="border.index">
                            <p>{{border}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <app-footer class="mt-2"></app-footer>
  </div>
</template>

<script>
import AppHeader from "../common/Header.vue";
import AppFooter from "../common/Footer.vue";
export default {
  name: "Detail",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {};
  },
  computed: {
    getDetailNation() {
      return this.$store.getters.detailNation;
    }
  },
  method: {},
  created() {
    return this.$store.dispatch("GET_NATION", this.$route.params.code);
  }
};
</script>

<style scoped>
.custom-img{
    width: 40%;
    height: 8%;
}
</style>
