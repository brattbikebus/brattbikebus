<template>
  <div id="mapContainer"></div>
</template>
<script setup>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { onMounted, ref } from 'vue'

const leaflet = ref(null)
const control = ref(null)

onMounted(() => {
  // https://leafletjs.com/reference.html#map-zoomsnap
  // https://leafletjs.com/reference.html#map-wheeldebouncetime
  // https://leafletjs.com/reference.html#map-zoomdelta
  leaflet.value = L.map('mapContainer', {
    zoomSnap: 1,
    wheelDebounceTime: 100,
    zoomDelta: 1,
  }).setView([42.8509, -72.5579], 13)

  let CartoDB_PositronNoLabels = L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
    {
      noWrap: true,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd'
    }
  )

  const baselayers = {
    'CartoDB Positron No Labels': CartoDB_PositronNoLabels,
  }

  CartoDB_PositronNoLabels.addTo(leaflet.value)


  // /*
  //  * LEAFLET CONTROLS
  //  */


  // Layer Control
  control.value = L.control.layers(baselayers).addTo(leaflet.value)
})
</script>

<style scoped>
#mapContainer {
  width: 60vw;
  height: 60vh;
}
</style>