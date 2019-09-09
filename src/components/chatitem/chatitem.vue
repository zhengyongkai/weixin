<template>
  <div>

    <div class="chatitem"
         v-for="count in 10">
      <div class="item"
           @touchmove='touchMove'
           @touchstart='touchStart'
           @touchend='touchend'
           :style="deleteS">
        <div class="img"><img src="../../img/user.jpg" />
          <span class="spot"
                v-if="count%3==0"> </span>
          <span class="spot_w"
                v-if="count%3==1">{{count}}</span>
          <span v-if="count%3==2"></span>
        </div>
        <div class="content">
          <div class="name">
            <b>郑永楷</b>
          </div>
          <div class="chat">[动画表情]</div>
        </div>
        <div class="right">
          <div class="time">下午12:00</div>
          <div class="num">
            <svg-icon icon-class="unotice"
                      v-if="count%3==0" />
          </div>
        </div>
        <div class="handle">
          <div class="notice">
            标位未读
          </div>
          <div class="delete">
            删除
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'chatitem',
  data () {
    return {
      deleteS: ""
    }
  },
  methods: {
    touchStart (e) {
      console.log(e.touches[0].clientX)
    }
    ,
    touchMove (e) {
      //console.log(e)
      // e.preventDefault();
      // if (e.touches["0"].clientX > 0) {
      //   this.deleteS = "transform:translateX(" + (Math.round(e.touches["0"].clientX) / 50) + "rem)";
      // }
    },
    touchend (e) {
      // console.log(e.touches[0].clientX)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.item {
  position: relative;
  padding: 0.63rem 0.66rem;
  height: 4.38rem;
  .img {
    position: relative;
    img {
      width: 3.15rem;
      height: 3.15rem;
      border-radius: 0.5rem;
    }
    .spot {
      position: absolute;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 100%;
      background: red;
      left: 2.8rem;
      top: -0.1rem;
    }
    .spot_w {
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 100%;
      background: red;
      left: 2.6rem;
      top: -0.1rem;
      text-align: center;
      color: #fff;
      font-size: 0.5rem;
      line-height: 0.8rem;
    }
  }
  .content {
    position: absolute;
    padding: 0.63rem 0.66rem;
    top: 0;
    left: 4.38rem;

    .name {
      font-size: 0.95rem;
    }
    .chat {
      padding-top: 0.5rem;
      font-size: 0.81rem;
    }
  }
  .right {
    padding: 0.63rem 0.66rem;
    position: absolute;
    font-size: 0.81rem;
    color: rgba(153, 153, 153, 1);
    right: 0;
    top: 0;

    .num {
      border-radius: 100%;
      color: red;

      float: right;

      margin-top: 1rem;
    }
  }
  .handle {
    position: absolute;
    top: 0;
    right: -9rem;
    .notice {
      position: absolute;
      top: 0;
      right: 4rem;
      width: 5rem;

      text-align: center;
      background: #d3d3d3;
      text-decoration: underline;
      color: #fff;
      line-height: 3.38rem;
    }
    .delete {
      position: absolute;
      top: 0;
      right: 0;
      line-height: 3.38rem;
      text-align: center;
      background: red;
      color: #fff;
      text-decoration: underline;
      width: 4rem;
    }
  }
}
</style>
