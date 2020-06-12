import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDHEZnNrdCwvVt02dGGlGUW9-06N4TQC1M",
    libraries: ["geometry"]
  }
});
