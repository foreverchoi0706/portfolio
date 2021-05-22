<template>
  <section class="setting">
    <form class="setting_form">
      <div class="setting_btns">
        <button type="button" @click="$emit('goSetting', goSetting)">X</button>
        <button type="submit">수정</button>
      </div>
      <ul class="setting_info">
        <li>
          <label>
            <strong>이름</strong>
            <input type="text" />
          </label>
        </li>
        <li>
          <label>
            <strong>이름</strong>
            <input type="text" />
          </label>
        </li>
        <li>
          <label>
            <strong>이름</strong>
            <input type="text" />
          </label>
        </li>
        <li>
          <label>
            <strong>이름</strong>
            <input type="text" />
          </label>
        </li>
        <li>
          <label>
            <strong>이름</strong>
            <input type="text" />
          </label>
        </li>
      </ul>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    goSetting: Function,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.setting {
  background-color: white;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  animation: appear 0.3s linear forwards;
  .setting_btns {
    display: flex;
    justify-content: space-between;
    button {
      margin: 0 5px;
    }
  }
  .setting_info {
    li {
      padding: 10px;
      label {
        display: flex;
        flex-direction: column;
        strong {
          margin-bottom: 10px;
        }
        input {
          flex-grow: 1;
          height: 30px;
          border: 1px solid lightgray;
          border-radius: 5px;
        }
      }
    }
  }
}

@keyframes appear {
  from {
    top: 100vh;
  }
  to {
    top: 0;
  }
}
</style>
