import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "你的 Google map api key",
    libraries: ["geometry"]
  }
});
