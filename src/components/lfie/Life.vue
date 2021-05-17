<template>
  <section class="post">
    <h3 class="post_title">{{ id }}</h3>
    <div class="post_summary">
      test test test test test test test test test test test test test test test
    </div>
    <ul class="post_info">
      <li>
        <img class="post_like" src="@/assets/like.png" alt="like" />
        <strong>10</strong>
      </li>

      <li>
        <img class="post_comments" src="@/assets/comments.png" alt="comments" />
        <strong>10</strong>
      </li>
    </ul>
  </section>
</template>

<script>
import router from "@/router";

export default {
  props: {
    id: Number,
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss">
.post {
  padding: 10px;
  .post_title {
    margin: 0;
  }
  .post_summary {
    margin: 18.72px 0;
  }
  .post_info {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      margin-right: 5px;
      font-size: 0.7rem;
      .post_like {
        width: 24px;
        height: 24px;
      }
      .post_comments {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
