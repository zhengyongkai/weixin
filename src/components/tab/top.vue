<template>
  <header>
    <div class="content">
      <section class="logoPart">
        <svg-icon icon-class="back" />
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/style/public";
header {
  position: relative;
  height: 2rem;
  border: 1px solid red;
  z-index: 200;
  color: #fff;
  position: fix;
  .content {
    @include topcenter;
    @include justify(flex-start);
    width: 100%;
    padding: 0 1.87rem;
    svg-icon {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>

