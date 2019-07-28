<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-light p-0">
        <div class="container">
          <router-link to="/" class="text-danger navbar-brand">Nations</router-link>
          <div class="navbar-nav mr-auto">
            <div class="nav-item nav-link">
              <router-link to="/about" class="text-dark">About</router-link>
            </div>
            <div class="nav-item nav-link">
              <router-link to="/contact" class="text-dark">Contact</router-link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
</style>
