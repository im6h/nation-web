<template>
  <div class="jumbotron m-1 p-3">
    <img v-bind:src="nation.flag" class="img-custom p-1" />
    <p class="text-center">{{nation.name}}</p>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["nation"]
};
</script>

<style scoped>
.img-custom {
  width: 33rem;
  height: 21rem;
}
</style>
