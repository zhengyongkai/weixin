<template>
  <div class="body">
    <div class="top">
      <div class="top_content">
        <svg-icon icon-class="goback"
                  class="goback"
                  fill="#fff" />
        <svg-icon icon-class="other"
                  class="other"
                  fill="#fff" />
      </div>
    </div>
    <div class="show">

      <div class="username">兔村最靓的树</div>
      <div class="user_img">
        <img src="../../../img/me.jpg" />
      </div>

    </div>
    <div class="content">
      <div class="items">
        <div class="item">
          <div>
            <div><img src="../../../img/bg.jpg"
                   class="user_img" /></div>
            <div class="user_name">懒懒的兔子</div>
            <div class="ccontent">
              今天也是一只精致懒懒的小兔兔
            </div>
            <div class="cbottom">
              <div class="time">1小时前</div>
              <div class="cother">
                <svg-icon icon-class="other"
                          class="other"
                          fill="#fff" />
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div><img src="../../../img/bg.jpg"
                 class="user_img" /></div>
          <div class="user_name">懒懒的兔子</div>
          <div class="ccontent">
            今天也是一只精致懒懒的小兔兔,小兔兔傻傻的,笨笨的，哼\n\r
            今天也是一只精致懒懒的小兔兔,小兔兔傻傻的,笨笨的，哼
            今天也是一只精致懒懒的小兔兔,小兔兔傻傻的,笨笨的，哼
            今天也是一只精致懒懒的小兔兔,小兔兔傻傻的,笨笨的，哼
          </div>
          <div class="cbottom">
            <div class="time">1小时前</div>
            <div class="cother">
              <svg-icon icon-class="other"
                        class="other"
                        fill="#fff" />
            </div>
          </div>
        </div>
        <div class="item">
          <div>
            <div><img src="../../../img/bg.jpg"
                   class="user_img" /></div>
            <div class="user_name">懒懒的兔子</div>
            <div class="ccontent">
              <div v-if="img!=''">

                <div v-for="  i in img"
                     class="img_content">
                  <img :class="img.length==1?'img':'imgs'"
                       :src=i />
                </div>
              </div>
            </div>
            <div class="cbottom">
              <div class="time">1小时前</div>
              <div class="cother">
                <svg-icon icon-class="other"
                          class="other"
                          fill="#fff" />
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div>
            <div><img src="../../../img/bg.jpg"
                   class="user_img" /></div>
            <div class="user_name">懒懒的兔子</div>
            <div class="ccontent">
              <div v-if="img!=''">

                <div v-for="(i,index) in img"
                     class="img_content"
                     v-if="index==1">

                  <img :class="index==1?'img':'imgs'"
                       :src=i />
                </div>
              </div>
            </div>
            <div class="cbottom">
              <div class="time">1小时前</div>
              <div class="cother">
                <svg-icon icon-class="other"
                          class="other"
                          fill="#fff" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'friendcircle',
  data () {
    return {

      img: ["../../../static/images/bg.jpg", '../../../static/images/bg1.jpg', '../../../static/images/bg1.jpg', '../../../static/images/bg1.jpg']

    }
  }
}
</script>


<style lang="scss" scoped>
body {
  position: relative;
  background: #fff;
}
.top {
  text-align: center;
  position: fixed;
  width: 100%;
  height: 3rem;
  padding: 0 0.81rem;
  background: transparent;
  line-height: 3rem;
  z-index: 100;
  right: 0;
  top: 0;
  left: 0;
  z-index: 100;
  .top_content,
  .user_img {
    color: #fff;
    position: relative;
  }
  .user_img {
    img {
      width: 4.38rem;
      height: 4.38rem;
      z-index: 200;
    }
  }
  .other {
    color: #fff;
    height: 1.5rem;
    width: 1.5rem;
  }
  .goback {
    position: absolute;
    left: 0;
    height: 1.2rem;
    width: 1.2rem;
    top: 0.8rem;
  }
  .num {
    color: #fff;
    position: absolute;
    line-height: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    top: 0.7rem;
    left: 1rem;
    width: 2.5rem;
    text-align: center;
  }
  .text {
    position: absolute;
    top: 0;
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }

  .other {
    position: absolute;
    top: 0.5rem;
    right: 0;
    float: right;
  }
}
.show {
  height: 20rem;
  position: relative;
  // background: url("../../../img/bg.jpg") no-repeat; /* Safari 5.1 - 6.0 */
  background-size: 100%;

  .user_img {
    position: absolute;
    right: 0.87rem;
    top: 17rem;
    img {
      width: 4.38rem;
      height: 4.38rem;
    }
  }
  .username {
    position: absolute;
    color: rgba(255, 255, 255, 1);
    right: 6.6rem;
    top: 18rem;
  }
}
.content {
  background: #fff;
  top: 2rem;
  padding: 0 0.87rem;
  .items {
    .item {
      padding: 1rem 0;
      position: relative;
      min-height: 6rem;
      width: 100%;
      border-bottom: 1px solid rgba(223, 223, 221, 1);
      .user_img {
        width: 3rem;
        height: 3rem;
        border-radius: 0.5rem;
      }
      .user_name {
        padding: 1rem 0;
        position: absolute;
        left: 4.5rem;
        top: 0;
        font-size: 1rem;
        color: rgba(87, 107, 149, 1);
      }
      .ccontent {
        position: relative;
        top: -1.5rem;
        left: 4.5rem;
        font-size: 1rem;
        word-break: break-all;
        word-wrap: break-word;
        max-width: 19rem;
        line-height: 1.5rem;
        color: #000;
      }
      .img_content {
        display: inline-block;
        .img {
          width: 15rem;
          height: 15rem;
        }
        .imgs {
          width: 6rem;
          height: 6rem;
        }
      }

      .cbottom {
        padding: 0.5rem 0;

        .time {
          position: absolute;
          left: 4.5rem;
          color: rgba(115, 115, 115, 1);
          font-size: 0.8rem;
        }
        .cother {
          position: absolute;
          right: 0.87rem;
        }
      }
    }
  }
}
</style>