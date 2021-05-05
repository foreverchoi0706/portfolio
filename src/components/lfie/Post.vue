<template>
  <section class="post" @click="goDetail">
    <h3 class="post_title">{{ id }}</h3>
    <div class="post_summary">
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test
    </div>
    <ul class="post_info">
      <li>
        <img class="post_like" src="@/assets/like.png" alt="like" />
      </li>
      <li>10</li>
      <li>
        <img class="post_comments" src="@/assets/comments.png" alt="comments" />
      </li>

      <li>10</li>
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
    const goDetail = () => {
      router.push(`/life/${props.id}`);
    };
    return { goDetail };
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
    gap: 5px;
    li {
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