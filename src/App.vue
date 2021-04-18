<template>
  <main>
    <article>
      <router-view />
    </article>
    <Nav />
  </main>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style>
body {
  margin: 0;
}
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
article {
  width: 100%;
  flex-grow: 1;
}
</style>
