<template>
  <section class="post">
    <h3 class="post_title">title</h3>
    <div class="post_summary">
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test
    </div>
    <ul class="post_info">
      <li>
        <img class="post_like" src="@/assets/like.png" alt="like" />
      </li>
      <li>
        <img class="post_comments" src="@/assets/comments.png" alt="comments" />
      </li>
    </ul>

    <router-view>TEST</router-view>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.post {
  padding: 10px;
  .post_title {
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
      margin-right: 10px;
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