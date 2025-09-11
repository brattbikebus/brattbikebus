---
title: Route
date: 2025-09-11T15:46:00.000-04:00
---
# Route

Please [Contact Us](contact.md) if you would like to request a new BikeBus stop near you!

<div id="mapContainer">
<l-map ref="map" zoom="13" :center="[42.8509, -72.5579]">
    <l-tile-layer
    url="https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=211d97f818704ef0b6a86246e80b4a1f"
    layer-type="base"
    name="Thunderforest Cycle"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.thunderforest.com/">Thunderforest</a>'
    ></l-tile-layer>
</l-map>
</div>

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
</script>

<style scoped>
  #mapContainer {
    width: 60vw;
    height: 60vh;
  }
</style>