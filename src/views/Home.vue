<template>
  <article class="home">
    <!-- loading -->
    <Loading v-if="!state.isLoaded" />
    <!-- loading -->
    <div id="map" />
    <div class="home_btns">
      <button @click="goCurrentPosition">▼</button>
      <button @click="zoomIn">+</button>
      <button @click="zoomOut">-</button>
    </div>
  </article>
</template>

<script>
import { onMounted, reactive } from "vue";
import api from "@/api";
//components
import Loading from "@/components/Loading";

// 카카오 맵 스크립트
const KAKAO_SCRIPT =
  "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c18742c14562f73324a4c92c7d085dce&libraries=services";

// 현위치 마커 이미지
const HOME_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACdgAAAnYB2mDjTwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAK5SURBVGiB7ZhNSFRhFIafM6NGEUKF/ZBEm/42rdq0qLyZ0EaECIuWYjMZ2TI3iVOLVkWrhBktI1oULmol9IMz0qIMWpVBRgvLwHRhYYTlzD0tsl+8d747fpdJuM/ynvee877znfm7EBERsaSRsBrrg8QmKnQnAK77XOqvjoUxx3oAHWzbhhSuAPV/T5JBXPe07O8ZsTnPagDNJRtBb6JUe0hmQdvE6blua6aVAKoIueQZVC8gxAymZljJKdmVmVvs7EUH0IH2apbP3gBpCjj6EcSbxemeWMz8RQWY3/e7wPYSW7wH97A4vU9K9VD8uD3QXLIRKQxTunmAjRDLaTbRWmqDwCcQeN/NnWSYnG6X5v5vwW4LQOn7bmznGXk9JA2Zt8Z3mArn9/0OsKMkb+ZMIRyRukzWRGy0An/se9jmAWpQ7ms22WEi9j0BVYRs4hzC2WLaUBCuMTmdkOb+gpfE/wSyxzsROimHeQClhZrVl/wknsb03om1LHPfoVTZdxaIAribxekdX6jofQJV6vwH5gHiSHyPV9E7gLprQrFTCq67yqvkHUCkPHu/ED5e7H2TlokoQLmJApSbKEC5iQKUm4oQeiowjjD3z9VKoBbLv2ztBhAdIK8tcqD3w0JlzZ5cD/k+4KCtkTZXaIY5OeZlHkCc7gnyHAU+2xpqM8BLach8Kiaa11h7PmoxgAR4HBJE649fAGvHbAFPL37/B0ZDsVIS7iuvineA3IZhBOMHTCEyxlDtU6+iZwBJpVxUjZ7NhIt0SCrlelV938Ti9NxC5LzhpDfmnnTKTCfnxUnf9pMU/RSSunQXqk3ACx/ZRwqFy0amfnS9CMz4CEZQbZK6dFfRTuZDQYeSWyjoVmKs+HXR1a9U5B/L3j6zV/Vnr4et64jHdiNU/u7FF+IyKvvSr4P0ioiIWMJ8B/mfz3gH+pY+AAAAAElFTkSuQmCC";

// 유치원 마커 이미지
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
      geocoder: null,
      level: 10,
      marker: null,
    });

    onMounted(async () => {
      state.basicInfo = await api.getBasicInfo({
        sidoCode: 41,
        sggCode: 41173,
      });
      window.kakao && window.kakao.maps ? initMap() : addKakaoMapScript();
    });

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
        state.geocoder = new kakao.maps.services.Geocoder();
        setMarker(HOME_IMAGE, latitude, longitude);
        state.isLoaded = true;
        state.basicInfo.data.kinderInfo.forEach((info) => {
          searchAddr(info.addr);
        });
      });
    };

    // 마커 찍기
    const setMarker = (HOME_IMAGE, lat, lng) => {
      const imageSrc = HOME_IMAGE;
      const imageSize = new kakao.maps.Size(36, 36);
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

    const searchAddr = (addr) =>
      state.geocoder.addressSearch(addr, (result, status) => {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          setMarker(MARKER_IMAGE, result[0].y, result[0].x);
        }
      });
    const goCurrentPosition = () => {
      state.level = 3;
      initMap();
    };
    // 줌인
    const zoomIn = () => state.map.setLevel((state.level -= 1));
    // 줌아웃
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
    border-radius: 5px;
    background-color: white;
    position: absolute;
    z-index: 999;
    top: calc(40vh);
    right: 2vw;
    display: flex;
    flex-direction: column;
    button {
      all: initial;
      width: 30px;
      height: 30px;
      text-align: center;
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
