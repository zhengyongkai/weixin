<template>
  <div>
    <div class="top">
      <div class="text">
        <!-- <div class="back">返回</div> -->
        <div class="ctext"><b>通讯录</b></div>
        <div class="icon">+</div>
      </div>
    </div>
    <div class="address">
      <div class="search">
        <div>
          <input class="sinput_w"
                 placeholder="请输入查询内容" />
        </div>
      </div>
      <div class="content">
        <div class="citems">
          <div class="citem">
            <svg fill="#fff"
                 class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink"
                   xlink:href="#newfriend"></use>
            </svg>
            <div class="name">新的朋友</div>
          </div>
          <div class="citem">
            <svg fill="#fff"
                 class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink"
                   xlink:href="#groupchat"></use>
            </svg>
            <div class="name">群聊</div>
          </div>
          <div class="citem">
            <svg fill="#fff"
                 class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink"
                   xlink:href="#label"></use>
            </svg>
            <div class="name">标签</div>
          </div>
          <div class="citem">
            <svg fill="#fff"
                 class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink"
                   xlink:href="#accounts"></use>
            </svg>
            <div class="name">公众号</div>
          </div>
        </div>
        <div class="friend"
             ref="list">
          <div>
            <div class="code">A</div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷1</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷1</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷1</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷1</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷1</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷1</div>
            </div>
          </div>
          <div>
            <div class="code">B</div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
          </div>
          <div>
            <div class="code">C</div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
          </div>
          <div>
            <div class="code">X</div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
          </div>
          <div>
            <div class="code">Y</div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
            <div class="item">
              <div><img src="../../img/user.jpg" /></div>
              <div class="name">郑永楷</div>
            </div>
          </div>
          <div class="bottom">
            173位联系人
          </div>
          <div>
            <ul class="list">
              <li v-for="(value, index) in code"
                  @click="choose(value,index)"
                  :class="[index==rindex?'fontcolor':'']">{{value}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ScrollFlipPage from 'scroll-flip-page'
import { getScrollTop, getScrollHeight, getWindowHeight } from '../../config/utils';
export default {
  name: 'HelloWorld',
  data () {
    return {
      code: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'],
      rindex: -1
    }
  },
  methods: {
    choose (value, index) {
      //dom需要异步渲染
      this.$nextTick(() => {
        var data = this.$refs.list.getElementsByClassName("code");

        for (var item of data) {

          if (item.innerHTML == value) {
            this.rindex = index;
            //console.log(getScrollTop()+getWindowHeight())
            clearTimeout(timer);
            let timer = setTimeout(function () {
              //滚动事件 未完待续...
            }, 100);
          }
        }
      })
      //console.log(data)
    },
    fetch () {

    },
    check () {

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
      color: rgb(0, 0, 0);
      position: absolute;
      left: 44%;
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
.address {
  position: relative;
  top: 3rem;
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
  .content {
    position: relative;

    .citems {
      background: rgba(255, 255, 255, 1);

      .citem {
        padding: 0.63rem;
        position: relative;

        .icon {
          width: 2.19rem;
          height: 2.19rem;
        }
        height: 3.44rem;
        .name {
          position: absolute;
          top: 0;
          left: 4rem;
          font-size: 0.95rem;
          line-height: 3.44rem;
        }
      }
    }
    .friend {
      .code {
        padding: 0 0.93rem;
        line-height: 1.37rem;
        color: rgba(51, 51, 51, 1);
        height: 1.37rem;
        width: 100%;
        font-size: 0.81rem;
      }
      .item {
        position: relative;
        padding: 0.63rem;
        height: 3.38rem;
        background: #fff;
        img {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 0.5rem;
        }
        .name {
          position: absolute;
          top: 1.09rem;
          left: 4rem;
          font-size: 0.95rem;
        }
      }
    }

    .bottom {
      height: 3.38rem;
      line-height: 3.38rem;
      color: rgba(51, 51, 51, 1);
      text-align: center;
    }

    .list {
      z-index: 999;
      position: fixed;
      right: 0.28rem;
      top: 7rem;
      font-weight: bold;
      font-size: 0.69rem;
      .fontcolor {
        color: lightgreen;
      }
      li {
        padding: 0.12rem 0;
      }
    }
  }
}
</style>
