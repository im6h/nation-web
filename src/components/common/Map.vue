<template>
  <div>
    <GmapMap
      :center="{lat:location[0], lng:location[1]}"
      :zoom="5.5"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    ></GmapMap>
  </div>
</template>
<script>
export default {
  name: "Map",
  props: ["location"]
};
</script>
<style scoped>
</style>