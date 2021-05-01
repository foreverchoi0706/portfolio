<template>
  <Header />
  <section class="document">Document</section>
  <Nav/>
</template>

<script>
import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default {
  name: "Document",
  components: {
    Header,
    Nav
  },
};
</script>

<style lang="scss" scoped>
.document {
  width: 100%;
  height: calc(100vh - 100px);
}
</style>
