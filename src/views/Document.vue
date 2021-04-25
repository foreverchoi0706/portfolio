<template>
  <Header />
  <section>Document</section>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Document",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
