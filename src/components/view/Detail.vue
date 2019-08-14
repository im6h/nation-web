<template>
  <div>
    <app-header></app-header>
    <div class="container mt-5">
      <hr />
      <div class="justify-content-center">
        <div class="row">
          <!-- flag  -->
          <div class="col-lg-4">
            <div>
              <h4>Nation flag</h4>
              <section>
                <img
                  class="round mx-auto w-100 h-100"
                  :src="getDetailNation.flag"
                  :alt="getDetailNation.name"
                />
              </section>
            </div>
            <h4 class="text-left mt-4">Nation</h4>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{{getDetailNation.name}}</td>
                </tr>
                <tr>
                  <th>Offical</th>
                  <td>{{getDetailNation.altSpellings[1]}}</td>
                </tr>
                <tr>
                  <th>Alternative Spellings</th>
                  <td>{{getDetailNation.altSpellings.join(", ")}}</td>
                </tr>
                <tr>
                  <th>Populations</th>
                  <td>{{getDetailNation.population}} peoples</td>
                </tr>
              </tbody>
            </table>
            <!-- language -->
            <h4 class="text-left">Languages</h4>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Native language</th>
                  <td>{{getDetailNation.languages.map(e=>e.name).join(", ")}}</td>
                </tr>
              </tbody>
            </table>
            <!-- region economic bloc -->
            <h4 class="text-left">Regional economic bloc</h4>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{{ getDetailNation.regionalBlocs.map(e=>e.acronym).join(", ")}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Name -->
          <div class="col-lg-4">
            <!-- code -->
            <h4 class="text-left">Codes</h4>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Alpha code 2</th>
                  <td>{{getDetailNation.alpha2Code}}</td>
                </tr>
                <tr>
                  <th>Alpha code 3</th>
                  <td>{{getDetailNation.alpha3Code}}</td>
                </tr>
                <tr>
                  <th>Top leve domain</th>
                  <td>{{getDetailNation.topLevelDomain.join(", ")}}</td>
                </tr>
                <tr>
                  <th>Internal calling code</th>
                  <td>{{getDetailNation.callingCodes.join(", ")}}</td>
                </tr>
              </tbody>
            </table>
            <!-- currency -->
            <h4 class="text-left">Currencies</h4>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Code</th>
                  <td>{{getDetailNation.currencies.map(e=>e.code).join(", ")}}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{{getDetailNation.currencies.map(e=>e.name).join(", ")}}</td>
                </tr>
                <tr>
                  <th>Symbol</th>
                  <td>{{getDetailNation.currencies.map(e=>e.symbol).join(", ")}}</td>
                </tr>
              </tbody>
            </table>
            <!-- Geography -->
            <h4 class="text-left">Geography</h4>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Capital</th>
                  <td>{{getDetailNation.capital}}</td>
                </tr>
                <tr>
                  <th>Area</th>
                  <td>
                    {{getDetailNation.area}} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <th>Region</th>
                  <td>{{getDetailNation.region}}</td>
                </tr>
                <tr>
                  <th>Timzone</th>
                  <td>{{getDetailNation.timezones.join(", ")}}</td>
                </tr>
                <tr>
                  <th>Subregion</th>
                  <td>{{getDetailNation.subregion}}</td>
                </tr>
                <tr>
                  <th>Lat/Lng</th>
                  <td>{{getDetailNation.latlng.join(", ")}}</td>
                </tr>
                <tr>
                  <th>Border</th>
                  <td>{{getDetailNation.borders.join(", ")}}</td>
                </tr>
              </tbody>
            </table>
            
          </div>
          <!-- Geography -->
          <div class="col-lg-4">
            <h4>Map</h4>
            <!-- map -->
            <div class="mb-2">
              <app-map v-bind:location="getDetailNation.latlng"></app-map>
            </div>
          </div>
        </div>
        <app-footer class="mt-4"></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../common/Header.vue";
import AppFooter from "../common/Footer.vue";
import AppMap from "../common/Map.vue";
export default {
  name: "Detail",
  components: {
    AppHeader,
    AppMap,
    AppFooter
  },
  data() {
    return {
      show: true
    };
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
</style>
