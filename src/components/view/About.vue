<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <ul class="list-unstyled mt-5">
        <li class="media">
          <div class="media-body">
            <h5>API</h5>
            <p>
              I used data from this
              <a href="https://restcountries.eu/#api-endpoints-all">API</a> for build website.
            </p>
          </div>
        </li>
        <li class="media">
          <div class="media-body">
            <h5>Source code</h5>
            <p>
              Source code is available on
              <a href="https://github.com/tjjone98/nation-web">Github</a>.
            </p>
          </div>
        </li>
        <li class="media">
          <div class="media-body">
            <h5>Contact</h5>
            <p>If you have any questions or suggestions regarding this site, please email to me at danghaiv.18@gmail.com</p>
          </div>
        </li>
      </ul>
      <hr />
      <app-footer class="fixed-bottom"></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/common/Header.vue";
import AppFooter from "@/components/common/Footer.vue";

export default {
  name: "About",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
</style>
