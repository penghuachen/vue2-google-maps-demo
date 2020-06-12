<template>
  <div id="app">
    <h1>vue2-google-maps demo</h1>
    <GmapMap
      ref="mapRef"
      :center="{ lat: 20, lng: 20 }"
      :options="mapOptions"
      :style="mapStyle"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
    <p>地圖上當前兩點直線距離為: {{ distance }} 公里</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: [
        {
          position: { lat: 20, lng: 20 }
        },
        {
          position: { lat: 30, lng: 30 }
        }
      ],
      distance: 0
    };
  },
  computed: {
    mapOptions() {
      return {
        zoom: 3,
        mapTypeId: "terrain"
      };
    },
    mapStyle() {
      return {
        width: 500 + "px",
        height: 300 + "px"
      };
    }
  },
  mounted() {
    console.log(this.$refs.mapRef);
    this.$refs.mapRef.$gmapApiPromiseLazy().then(map => {
      const { LatLng, geometry } = map.maps;
      const result = geometry.spherical.computeDistanceBetween(
        new LatLng({ lat: 20, lng: 20 }),
        new LatLng({ lat: 30, lng: 30 })
      );
      this.distance = (result / 1000).toFixed(1);
    });
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
