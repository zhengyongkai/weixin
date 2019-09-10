<template>
  <div>
    <div class="top">
      <div class="text">
        <!-- <div class="back">返回</div> -->
        <div class="ctext"><b>微信</b></div>
        <div class="icon">+</div>
      </div>
    </div>
    <div class="content">
      <div class="search">

        <div>
          <input class="sinput_w"
                 placeholder="请输入查询内容"
                 @focus="inputtext" />
        </div>
      </div>
      <div class="computer"
           v-if="true">
        <!-- <svg fill="#000" class="icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#computer"></use>
                </svg> -->
        <div class="text">Windows 微信已登录,手机通知关闭</div>
      </div>
      <div class="items"
           v-for="count in 10">
        <div class="item">
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
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import top from '../../components/tab/top';
export default {
  name: 'chat',
  data () {
    return {
      input_n: false
    }
  },
  components: {
    top
  },
  filters: {
    //电话拦截器 每四个字母添加一个空格
    teleFilter: function (value) {
      value = " " + value;
      return value.replace(/(.{4})/g, '$1 ');
    }
  },
  methods: {
    inputtext: function () {
      this.input_n = true;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/style/public";

.top {
  position: fixed;
  width: 100%;
  height: 3rem;
  background: #ebebeb;
  padding: 0 0.81rem;
  z-index: 100;

  .text {
    width: 100%;
    @include fontStyle(1rem, 3rem);
    font-family: "Microsoft YaHei";

    position: relative;
    .back {
      color: rgb(0, 0, 0);
      position: absolute;
      left: 0;
    }

    .ctext {
      width: 100%;
      color: rgb(0, 0, 0);
      position: absolute;
      text-align: center;
    }
    .icon {
      @include fontStyle(1.5rem, 2.73rem);
      position: absolute;
      color: rgb(0, 0, 0);
      top: 0px;
      right: 0;
    }
  }
}
.computer {
  position: relative;
  height: 2.5rem;
  padding: 0 0.94rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }
  .text {
    position: absolute;
    @include fontStyle(0.9rem, 2rem);
    top: 0;
    // left:4rem;
  }
}
.content {
  position: relative;
  top: 3rem;
}
.search {
  height: 2.72rem;
  width: 100%;
  padding: 0.5rem 0.94rem;

  .sinput,
  .sinput_w {
    padding: 0 1rem;
    height: 1.75rem;
    width: 100%;
    border-radius: 0.3rem;
  }
  .sinput_w {
    text-align: center;
  }
}

.items {
  padding: 0 0.63rem;

  background: #fff;
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
  }
}
</style>

