<template>
  <div class="body">
    <div class="top">
      <svg-icon icon-class="photo"
                class="svg" />
    </div>
    <div class="content">
      <div class="info">
        <div>
          <img src="../../img/me.jpg" />
          <div class="uname">
            <b>兔村最靓的树</b>
          </div>
          <div class="unum">微信号：zyk13414027941</div>
          <div class="right">
            <svg-icon icon-class="qr" />
            <svg-icon icon-class="arrow" />
          </div>
        </div>
      </div>
      <div class="items">
        <div class="item">
          <svg fill="#fff"
               class="icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                 xlink:href="#burse"></use>
          </svg>
          <div class="ftext">钱包</div>
          <div class="right">
            <div class="arrow">
              <svg-icon icon-class="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div class="items">
        <div class="item">
          <svg fill="#fff"
               class="icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                 xlink:href="#photo"></use>
          </svg>
          <div class="ftext">相册</div>
          <div class="right">
            <div class="arrow">
              <svg-icon icon-class="arrow" />
            </div>
          </div>
        </div>
        <div class="item">
          <svg fill="#fff"
               class="icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                 xlink:href="#collect"></use>
          </svg>
          <div class="ftext">收藏</div>
          <div class="right">
            <div class="arrow">
              <svg-icon icon-class="arrow" />
            </div>
          </div>
        </div>
        <div class="item">
          <svg class="icon"
               fill="#10aeff">
            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                 xlink:href="#cardbag"></use>
          </svg>
          <div class="ftext">卡包</div>
          <div class="right">
            <div class="arrow">
              <svg-icon icon-class="arrow" />
            </div>
          </div>
        </div>
        <div class="item">
          <svg fill="#fff"
               class="icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                 xlink:href="#smile"></use>
          </svg>
          <div class="ftext">表情</div>
          <div class="right">
            <div class="arrow">
              <svg-icon icon-class="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div class="items">
        <div class="item">
          <svg fill="#fff"
               class="icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                 xlink:href="#set"></use>
          </svg>
          <div class="ftext">设置</div>
          <div class="right">
            <div class="arrow">
              <svg-icon icon-class="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.top {
  position: fixed;
  width: 100%;
  height: 3rem;
  background: #fff;
  padding: 0 0.81rem;
  text-align: right;
  line-height: 4rem;
  color: #000;
  z-index: 100;
  .svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
.content {
  width: 100%;
  position: relative;
  top: 3rem;
  .info {
    background: #fff;
    height: 7rem;
    padding: 0.63rem 0.69rem;
    img {
      width: 4.39rem;
      height: 4.39rem;
    }
    .uname {
      position: absolute;
      top: 1rem;
      font-size: 1.1rem;
      left: 5.81rem;
    }
    .unum {
      position: absolute;
      top: 2.8rem;
      font-size: 1rem;
      color: rgba(119, 119, 119, 1);
      left: 5.81rem;
    }
    .right {
      position: absolute;
      top: 2.41rem;
      right: 0.69rem;
    }
  }
  .items {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    background: #fff;
    width: 100%;

    .item {
      position: relative;
      height: 2.69rem;
      padding: 0.4rem 0.63rem;
      .icon {
        height: 2rem;
        width: 2rem;
      }
      .ftext {
        position: absolute;
        top: 0.7rem;
        left: 3.5rem;
        font-size: 0.95rem;
      }
      .arrow {
        position: absolute;
        top: 0.7rem;
        right: 0.63rem;
      }
    }
  }
}
</style>