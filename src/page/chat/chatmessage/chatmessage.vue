<template>
    <div class="body">
        <div class="top">
            <div class="top_content" >
              <svg-icon icon-class="goback" class="goback"/>
              <div class="num"><u>100</u></div>
              <div class="text"><b>文件传输助手</b></div>
              <svg-icon icon-class="other" class="other"/>
            </div>
        </div>
        <div class="content">
           <div class="chat">
                <div style="text-align:center">--------你和...正在聊天-------</div>
                <br>
                <div class="recevice">
                    <div class="item">
                      <img src="../../../img/user.jpg" class="img"/>
                      <div>
                          <svg class="svgs">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href='#trigon-left'></use>
                          </svg>
                        <div class="text">
                          你他吗打球真想蔡徐坤
                        </div>
                      </div>
                    </div>
                     <div class="item">
                      <img src="../../../img/user.jpg" class="img"/>
                      <div>
                          <svg class="svgs">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href='#trigon-left'></use>
                          </svg>
                        <div class="text">
                          你他吗打球真想蔡徐坤,
                          你他吗打球真想蔡徐坤
                          你他吗打球真想蔡徐坤
                          你他吗打球真想蔡徐坤
                          你他吗打球真想蔡徐坤
                        </div>
                      </div>
                    </div>
                     <div class="item">
                      <img src="../../../img/user.jpg" class="img"/>
                      <div>
                          <svg class="svgs">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href='#trigon-left'></use>
                          </svg>
                        <div class="text">
                          你他吗打球真想蔡徐坤,
                          你他吗打球真想蔡徐坤
                          你他吗打球真想蔡徐坤
                          你他吗打球真想蔡徐坤
                          你他吗打球真想蔡徐坤
                        </div>
                      </div>
                    </div>
                     <div class="ritem">
                      <img src="../../../img/me.jpg" class="img"/>
                      <div>
                          <svg class="svgs">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href='#trigon-right'></use>
                          </svg>
                        <div class="text">
                          你全家都是蔡徐坤
                        </div>
                      </div>
                    </div>
                </div>
           </div>
        </div>  
        <div class="footer">
            <footer>dasd</footer>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss" scoped>
body,html{
  background: #fff;
}

.body{
  position: relative;
}
    .top{
        text-align: center;
        position: fixed;
        width: 100%;
        height: 3rem;   
        background: #fff;
        padding:  0 0.81rem;
        border-bottom: 0.2rem solid #ebebeb;
        line-height: 3rem;
        color:#000;
        z-index: 999;
        .top_content{
          position: relative;
        }
        .other{
        
          height: 1.5rem;
          width: 1.5rem;

        }
          .goback{
          position: absolute;
          left: 0;
          height: 1.2rem;
          width: 1.2rem;
          top:0.8rem;
        }
        .num{
          position: absolute;
          line-height: 1.5rem;
          border-radius: 1rem;
          background: rgb(202, 197, 197);
          height:1.5rem;
          font-size: 1rem;
          top:0.7rem;
          left: 1rem;
          width: 2.5rem;
          text-align: center;
        }
        .text{
        
          position: absolute;
           top:0;
           font-size: 1rem;
           width: 100%;
           text-align: center;
        }
      
        .other{
           position: absolute;
           top:0.5rem;
           right: 0;
          float: right;
        }
   
    }

    .content{
      position: absolute;
      top:3rem;
      width: 100%;
      
      .chat{
        padding:0 .76rem;
      }
     .item{
         margin-bottom: 1rem;
        position: relative;
        display:flex;
        flex-direction:row;
        
        .img{
        width: 2.38rem;
        height:2.38rem;
          }

          
          .svgs{
            position: absolute;
            top:-4rem;
            left: 2.8rem;
            width: 0.5rem;
            
          }
          .text{
            border-radius: 0.3rem;
            position: relative;
            top: 0;
            left:0.8rem;
            padding: 0.5rem 0.5rem;
            background:#fff;
            max-width:15rem ;

          }
      }

.ritem{
         margin-bottom: 1rem;
        position: relative;
        display:flex;
        flex-direction:row-reverse;
        
        .img{
        width: 2.38rem;
        height:2.38rem;
          }

          
          .svgs{
            position: absolute;
            top:-4rem;
            right: 2.8rem;
            width: 0.5rem;
            
          }
          .text{
            border-radius: 0.3rem;
            position: relative;
            top: 0;
            right:0.8rem;
            padding: 0.5rem 0.5rem;
            background:#9fe658;
            max-width:15rem ;

          }
      }

    }
</style>
