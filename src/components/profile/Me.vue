<template>
  <section class="me">
    <div class="me_summary">
      <label for="me_file">
        <form class="me_form" enctype="multipart/form-data">
          <input
            name="file"
            id="me_file"
            class="me_file"
            type="file"
            accept=".jpg,.jpeg,.png"
            @change="handleInput"
          />
          <input name="id" type="hidden" :value="$store.state.user.id" />
        </form>
        <img
          v-if="$store.state.user.profilePath"
          class="me_img"
          type="image"
          :src="`${VUE_APP_API_URL}/uploads/${$store.state.user.profilePath}`"
          alt="me"
        />
        <img
          v-else
          class="me_img"
          type="image"
          src="@/assets/profile_file.png"
          alt="me"
        />
      </label>
      <div>
        <h2>{{ $store.state.user.name }}/{{ $store.state.user.id }}</h2>
        <h5>{{ $store.state.user.addr }}</h5>
      </div>
    </div>
    <button class="me_setting_btn" @click="$emit('goSetting')">
      프로필 수정
    </button>
  </section>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { onMounted } from "vue";
import store from "@/store";
//api
import api from "@/api";

const { VUE_APP_API_URL } = process.env;

export default {
  name: "Me",
  props: {
    goSetting: Function,
  },
  setup() {
    const state = reactive({
      isInputed: false,
      file: "",
    });

    onMounted(async () => {
      const { data } = await api.getProfile(1);

      store.state.user = data;
      console.log(store.state.user);
    });

    const handleInput = async (e) => {
      const formData = new FormData(e.target.parentNode);
      const result = await api.patchProfile(formData);
      if (result.data.success) {
        const { data } = await api.getProfile(1);
        store.state.user = data;
      }
    };

    return {
      VUE_APP_API_URL,
      state,
      handleInput,
    };
  },
};
</script>

<style lang="scss" scoped>
.me {
  display: flex;
  flex-direction: column;
  label {
    display: inline-block;
    width: 7rem;
    height: 7rem;
    margin-right: 10px;
    .me_form {
      display: none;
      .me_file {
        width: 0;
        height: 0;
      }
    }
    .me_img {
      pointer-events: none;
      width: inherit;
      height: inherit;
      border-radius: 5px;
    }
  }
  .me_summary {
    display: flex;
    margin-bottom: 10px;
  }
  .me_setting_btn {
    all: initial;
    background-color: rgb(255, 191, 102);
    text-align: center;
    border-radius: 5px;
    padding: 5px;
  }
}
</style>
