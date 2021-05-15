<template>
  <section class="me">
    <div class="me_summary">
      <label for="me_file">
        <input id="me_file" class="me_file" type="file" />
        <img
          class="me_img"
          type="image"
          src="@/assets/profile_file.png"
          alt="me"
        />
      </label>
      <div>
        <h2>TEST NAME</h2>
        <h5>TEST NAME</h5>
      </div>
    </div>
    <button class="me_setting_btn" @click="$emit('goSetting')">
      프로필 수정
    </button>
  </section>
</template>

<script>
export default {
  name: "Me",
  props: {
    goSetting: Function,
  },
};
</script>

<style lang="scss">
.me {
  display: flex;
  flex-direction: column;
  label {
    display: inline-block;
    width: 7rem;
    height: 7rem;
    margin-right: 10px;
    .me_file {
      width: 0;
      height: 0;
    }
    .me_img {
      pointer-events: none;
      width: inherit;
      height: inherit;
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
