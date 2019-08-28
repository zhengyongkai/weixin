<template>
  <div class="body">
        <div class="top">
               <div><b>发现</b></div>
        </div>
        <div class="content">
            <div class="items">
                 <div class="item">
                    <svg fill="#fff" class="icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#friendcircle" ></use>
                    </svg>
                    <div class="ftext">朋友圈</div>
                    <div class="right">
                        <span class="spot"></span>
                        <img src="../../img/user.jpg"/>
                        <div class="arrow">
                            <svg-icon icon-class="arrow" />
                            
                        </div>
                    </div>
                </div>
            </div>
             <div class="items">
                 <div class="item">
                    <svg fill="#fff" class="icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#onesweeptwo" ></use>
                    </svg>
                    <div class="ftext">扫一扫</div>
                    <div class="right">
                        <div class="arrow">
                            <svg-icon icon-class="arrow" />
                        </div>
                    </div>
                </div>
                 <div class="item">
                    <svg fill="#fff" class="icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shark" ></use>
                    </svg>
                    <div class="ftext">摇一摇</div>
                    <div class="right">
                        <div class="arrow">
                            <svg-icon icon-class="arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="items">
                 <div class="item">
                    <svg fill="#fff" class="icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nearby" ></use>
                    </svg>
                    <div class="ftext">附近的人</div>
                    <div class="right">
                        <div class="arrow">
                            <svg-icon icon-class="arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="items">
                 <div class="item">
                    <svg fill="#fff" class="icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shopping" ></use>
                    </svg>
                    <div class="ftext">购物</div>
                    <div class="right">
                        <div class="arrow">
                            <svg-icon icon-class="arrow" />
                        </div>
                    </div>
                </div>
                 <div class="item">
                    <svg fill="#fff" class="icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#games" ></use>
                    </svg>
                    <div class="ftext">游戏</div>
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
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
   .top{
        position: fixed;
        width: 100%;
        height: 3rem;   
        background: #ebebeb;
        padding:  0 0.81rem;
        text-align: center;
        line-height: 3rem;
        color:#000;
        z-index: 100;
   }
   .content{
       position: relative;
       top: 3rem;
       
       .items{
      
        margin-bottom: 1.5rem;
         background: #fff;
        width: 100%;
      
       .item{
            position: relative;
            height: 2.69rem;
            padding: 0.4rem 0.63rem;
            .icon{
                height: 2rem;
                width: 2rem;
            }
            .ftext{
                position: absolute;
                top: 0.7rem;
                left:3.5rem;
                font-size: 0.95rem;
            }

            .right{
                position: relative;
                 top: 0;
                 right: 0;
                 .spot{
                      position: absolute;
                      width: 0.5rem;
                      height: .5rem;
                      border-radius: 100%;
                      background: red;
                      right: 1.25rem;
                      top:-0.15rem;
                      z-index:999;
                 }
                 img{
                        position: absolute;
                        width: 1.83rem;
                        height: 1.83rem;
                        // border-radius: 0.4rem;
                        right: 1.5rem;
                        float: left;
                 }
                 .arrow{
                     position: absolute;
                     top:0.3rem ;
                     right: 0;
                     
                 }

            }
            
          


        

       }
   }
   }

   
</style>
