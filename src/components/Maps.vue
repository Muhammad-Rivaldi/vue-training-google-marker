<template>
  <div class="container mt-1">
    <h1>Coordinate Big City in Indonesian</h1>
    <h2>Your Coordinate:</h2>
    <p>latitude: {{ Coordinate.lat }} ,longitude: {{ Coordinate.lng }}</p>
    <button @click="drawMarkers">Draw Marker</button>
    <button @click="drawDirections">Draw Direction</button>
    <button @click="clearMaps">Clear Maps</button>
    <GmapMap
      :center="IndoCoordinate"
      :zoom="4.5"
      map-type-id="terrain"
      style="width: 1000px; height: 500px;margin-left: 17%;"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
      <gmap-polygon :path="paths"></gmap-polygon>
    </GmapMap>
  </div>
</template>

<script>
// coordinate big city in indonesian
const jakarta = {lat: -6.211958454258377, lng: 106.83775449281246}
const bandung = {lat: -6.919802245145379, lng: 107.62152814857563}
const semarang = {lat: -7.005647116337328, lng: 110.43452054065352}
const yogyakarta = {lat: -7.79593483393476, lng: 110.36883601582764}
const surabaya = {lat: -7.250396905467752, lng: 112.75319773017688}
export default {
  name: "Maps",
  data() {
    return {
      Coordinate: {
        lat: 0,
        lng: 0,
      },
      // for assigment
      IndoCoordinate: {
        lat: -4.6126194392274105,
        lng: 122.55948555472831,
      },
      markers: [],
    };
  },
  methods: {
    drawMarkers() {
      this.markers = [
        {
          position: jakarta,
        },
        {
          position: bandung,
        },
        {
          position: semarang,
        },
        {
          position: yogyakarta,
        },
        {
          position: surabaya,
        },
      ];
    },
    drawDirections() {
      // this.paths = [home,school,work,this.Coordinate]
    },
    clearMaps() {
      this.paths=[],
      this.markers=[]
    },
  },
  created() {
    // to get user coordinate from browser request
    this.$getLocation({})
      .then((Coordinates) => {
        this.Coordinate = Coordinates;
      })
      .catch((error) => alert(error));
  },
};
</script>

<style>
</style>