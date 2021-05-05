<template>
  <section class="me">
    <label for="me_file">
      <input id="me_file" class="me_file" type="file" />
      <img class="me_img" type="image" src="@/assets/profile.png" alt="me" />
    </label>
    <div class="me_summary">
      <h2>TEST NAME</h2>
      <h5>TEST NAME</h5>
    </div>
  </section>
</template>

<script>
export default {
  name: "Me",
};
</script>

<style lang="scss">
.me {
  display: flex;

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
  .me_summary{

  }
}
</style>