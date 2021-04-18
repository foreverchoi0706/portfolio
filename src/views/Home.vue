<template>
  <section>
    <div id="map" />
    <div class="remote_level">
      <button name="+" @click="handleClick">+</button>
      <button name="-" @click="handleClick">-</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      level: 5,
    };
  },

  mounted() {
    document.addEventListener("touchstart", null , { passive: false });
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript();
  },
  methods: {
    addKakaoMapScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c18742c14562f73324a4c92c7d085dce";
      document.head.appendChild(script);
    },

    initMap() {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const container = document.getElementById("map");
        new kakao.maps.Map(container, {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: this.$data.level,
        });
      });
    },

    handleClick(e) {
      console.log(e.target.name);
      e.target.name === "+" ? this.$data.level++ : this.$data.level--;
      console.log(this.$data.level);
      this.initMap();
    },
  },
};
</script>

<style>
section {
  position: relative;
  width: 100%;
  height: 100%;
}
#map {
  width: inherit;
  height: inherit;
}
.remote_level {
  position: absolute;
  top: 45vh;
  right: 10px;
  z-index: 999;

  display: flex;
  flex-direction: column;
}
</style>
