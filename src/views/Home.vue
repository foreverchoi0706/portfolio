<template>
  <article class="home">
    <!-- loading -->
    <Loading v-if="!state.isLoaded" />
    <!-- loading -->
    <div id="map" />
    <div class="home_btns">
      <button @click="goCurrentPosition">NOW</button>
      <button @click="zoomIn">+</button>
      <button @click="zoomOut">-</button>
    </div>
    <img src="@/assets/mail_img.png"/>
<img src="@/assets/info_tag.png"/>
  </article>
</template>

<script>
import { onMounted, reactive } from "vue";
//components
import Loading from "@/components/Loading";

const KAKAO_SCRIPT =
  "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c18742c14562f73324a4c92c7d085dce";

const MARKER_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACdgAAAnYB2mDjTwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPGSURBVGiB7ZlfaBxVFMZ/Z9ZpqdqagBYLpRi1T0KgWt+s+69YFbQvUqtFCdhsgiAFqYgvsmAVRXzxTzSzqRQrQWoRa1FJG3YTH0ohUaEoSAW11UYt1VpJDGazc3zIKhhM7rmzm6qw3+Ps953zfXvvMGfuQAsttPC/hjS7oCpC+aF1BGEHUmufu5g6T1z9mtze0yJoM/s1JYCOF0J+1bsRtoNkgCsXoH6PcJhYDrFKj8rGqNpo74YCqCKMFu5BeRpY7yk/hcozfLRmQIrFOKmHxAF0dGcHcXAA2Ji0Rh1jwIOSjb5IIk4UQEcKWZQDLLxVfDGJyr2S6//AV+gdQEe670DlPeASX60DVWCbZKN3fUReAbTcfQOBHENZ5WXNjmlE05IpjVkF5gB6uHApl/MZ0JHImhXCV/w+3Slb9k9Z6IG58GW6m6U2D6BcS7hil5VuWgEd6l3N8vjLJdw683GBWnidbH7lJxfRtgLLao9cRPMAV5Cq9lqIxi0kO7wtCJ+gvAq8jHAMvEeIrbY2Duhoz3piPenR+AfQByRbGv5bnZHum1EZBK431lGqs2vlttcnFiO5V0C9nrRTqG6ebx5AMqUx4iAD/GisJYThJhfJHSCO7TOO0ie50ucLOsq/dgbYY66HOlfLcA9Im71hcMjNiX2etO3Ojs4SojPmdik96+SsDKxbCNTtz7IC35kb1ljn5EzJNeZ6gvMPMdzE8q29oW53cmK931xPOe2iuAOkaifMDaFLyz35Bf0M7+wEdpurpcQ51NlGiUrhJPY3rmlEHufsz/2y7e0ZAC0WA9Jn7gN5CcONWXc2QTpa63qHts70R7AHWIHqi6xu36OVwqfALEx0glxl1P+Jg5YDAOMoEb/p2Zz67JQG8oCveYjjNyw0UwDJDhyvzzMXCxXJDXxsIdrfB2J5IbEdXwhPWanmAJLrfwdkKJkjH+hByUQVK9u+AgDxbA8w6WvJAxcIwkd9BF4BJL/3FKJeDbygPCzpPvuDE98VACRTKiHS56tzQnlectGgr8w7wFyzNbsQKSfS/jPe59z5J5IIkx8tVrraYPkw6E1Ja9QxziRpuSv6LYm4scPdSlcbLDtK8vPRMeBOyUbnknpItoXqkOy+X6iFtwPjCeQfMjOdbcQ8NBgAYO7sZmYT8JZdxCAr2Wo9fVu8VJOgxWLArRPPIjy2CK0KPEkmeq5ZX2qa/4mp3L0FkX3A1fN++oZYd0i+1NSZquEtNB+SKw2R4kaEI39dVPYTznY22/ySQyuFW3S0d8O/7aOFFlr4D+MPa30baGmlSSkAAAAASUVORK5CYII=";

export default {
  name: "Home",
  components: {
    Loading,
  },
  setup() {
    const state = reactive({
      isLoaded: false,
      map: null,
      level: 3,
      marker: null,
    });

    onMounted(() => {
      window.kakao && window.kakao.maps ? initMap() : addKakaoMapScript();
    });

    const addKakaoMaker = (lat, lng) => {
      const imageSrc = MARKER_IMAGE;
      const imageSize = new kakao.maps.Size(48, 48);
      const imageOption = { offset: new kakao.maps.Point(27, 69) };
      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      const markerPosition = new kakao.maps.LatLng(lat, lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      marker.setMap(state.map);
    };

    const addKakaoMapScript = () => {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(initMap);
      script.src = KAKAO_SCRIPT;
      document.head.appendChild(script);
    };

    const initMap = () => {
      state.isLoaded = false;
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const container = document.getElementById("map");
        state.map = new kakao.maps.Map(container, {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: state.level,
        });
        addKakaoMaker(latitude, longitude);
        state.isLoaded = true;
      });
    };

    const goCurrentPosition = () => {
      state.level = 3;
      initMap();
    };

    const zoomIn = () => state.map.setLevel((state.level -= 1));

    const zoomOut = () => state.map.setLevel((state.level += 1));

    const handleClick = () => (state.isLoaded = !state.isLoaded);

    return { state, goCurrentPosition, zoomIn, zoomOut, handleClick };
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
  .home_btns {
    height: 60px;
    position: absolute;
    z-index: 999;
    top: calc(50vh - 50px);
    right: 2vw;
    button {
      all: initial;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      margin: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(255, 191, 102);
    }
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
