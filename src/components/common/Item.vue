<template>
  <div class="card m-1 p-0 custom-item">
    <div class="row m-0 card-header">
      <div class="col-7 text-left">
        <p class="custom">{{nation.name}}</p>
        <p>{{nation.nativeName}}</p>
      </div>
      <div class="col-5 my-auto">
        <img :src="nation.flag" :alt="nation.name" class="custom-img" />
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <!-- Country code 2 -->
      <li class="list-group-item">
        <section class="row p-0">
          <div class="col-6 text-left">
            <span>Country code (Alpha Code 2)</span>
          </div>
          <div class="col-6 text-center my-auto">
            <p>{{nation.alpha2Code}}</p>
          </div>
        </section>
      </li>
      <!-- Country code 3 -->
      <li class="list-group-item">
        <section class="row p-0">
          <div class="col-6 text-left">
            <span>Country code (Alpha Code 3)</span>
          </div>
          <div class="col-6 text-center my-auto">
            <p>{{nation.alpha3Code}}</p>
          </div>
        </section>
      </li>
      <!-- Currency  -->
      <li class="list-group-item">
        <section class="row p-0">
          <div class="col-6 text-left my-auto">
            <span>Currency</span>
          </div>
          <div class="col-6 text-center my-auto">
            <p>{{nation.currencies.map(e => e.code).join(",")}}</p>
          </div>
        </section>
      </li>
      <!-- Int dial code -->
      <li class="list-group-item">
        <section class="row p-0">
          <div class="col-6 text-left my-auto">
            <span>Int. dial code</span>
          </div>
          <div class="col-6 text-center my-auto">
            <div v-for="code in nation.callingCodes" :key="code.index">
              <span>{{code}}</span>
            </div>
          </div>
        </section>
      </li>
      <!-- Language -->
      <li class="list-group-item">
        <section class="row p-0">
          <div class="col-6 text-left my-auto">
            <span>Languages</span>
          </div>
          <div class="col-6 text-center my-auto">
            <p>{{nation.languages.map(e => e.iso639_2).join(",")}}</p>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["nation"],
  data() {
    return {
      currencies: [],
      callingCodes: []
    };
  }
};
</script>

<style scoped>
.custom:hover {
  color: cornflowerblue;
}
.custom-item {
  width: 16.5rem;
}
.custom-img {
  width: 4rem;
  height: 3rem;
}
</style>
