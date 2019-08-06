<template>
  <div>
    <header class="bg-light">
      <div class="container ">
        <nav class="navbar navbar-expand-lg navbar-light bg-light row p-1">
          <div class="col-6 text-left">
            <router-link to="/" class="navbar-brand ">
              <h4 class="custom">Nations</h4>
            </router-link>
          </div>
          <div class="col-6 text-right">
             <router-link to="/about" class="navbar-brand ">
              <h6 class="custom">About</h6>
            </router-link>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped>
.custom:hover{
  color: red;
}
</style>
