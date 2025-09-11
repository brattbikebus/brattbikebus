<template>
  <div style="height:600px; width:800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[42.8509, -72.5579]">
      <l-tile-layer
        url="https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=211d97f818704ef0b6a86246e80b4a1f"
        layer-type="base"
        name="Thunderforest Cycle"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>'
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 13,
    };
  },
};
</script>