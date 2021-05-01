<template>
  <Header />
  <section class="home">
    <div id="map" />
  </section>
  <Nav />
</template>

<script>
import { onMounted, reactive } from "vue";
//components
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {
    Header,
    Nav,
  },
  setup() {
    const state = reactive({
      level: 5,
    });

    onMounted(() => {
      window.kakao && window.kakao.maps ? initMap() : addKakaoMapScript();
    });

    const addKakaoMapScript = () => {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(initMap);
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c18742c14562f73324a4c92c7d085dce";
      document.head.appendChild(script);
    };

    const initMap = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const container = document.getElementById("map");
        new kakao.maps.Map(container, {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: state.level,
        });
      });
    };

    const handleClick = (e) => {
      e.target.name === "-" ? state.level++ : state.level--;
      initMap();
    };

    return { handleClick };
  },
};
</script>

<style lang="scss">
.home {
  position: relative;
  width: 100%;
  height: calc(100vh - 10vh);
  #map {
    width: inherit;
    height: inherit;
  }
}

@keyframes appear {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
