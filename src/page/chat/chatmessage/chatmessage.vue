<template>
    <div class="body">
        <div class="top">
            <div class="top_content" >
              <svg-icon icon-class="goback" class="goback"/>
              <div class="num"><u>100</u></div>
              <div class="text"><b>蔡梓敏</b></div>
              <svg-icon icon-class="other" class="other"/>
            </div>
        </div>
        <div class="content" @click="this.removeother" ref="list">
           <div class="chat">
                
                <div style="text-align:center">--------你和蔡梓敏正在聊天-------</div>
                <br>
                <div class="recevice" v-for="(value,index) in chat">
                    <div class="time">{{index}}</div>
                    <div :class="values.name=='czm'?'item':'ritem'" v-for="(values,indexs) in value">
                      <img src="../../../img/me.jpg" class="img"/>
                      <div>
                          <svg class="svgs">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="values.name=='czm'?'#trigon-left':'#trigon-right'"></use>
                          </svg>
                        <div class="text">
                            {{values.content}}
                        </div>
                      </div>
                    </div>
                    
                </div>
           </div>
        </div>  
        <div :class="bottom_ext==false?'footer':'footer bottom'">
            <div class="contents">
                <svg class="svg_v">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#voice"></use>
                </svg>
                <textarea class="svg_input"  @keydown.enter="send" v-model="input_t"/>
                <div class="svg_o">
                     <svg  class="face">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#face"></use>
                      </svg>
                      <svg  class="addthing" @click="this.bottom_show">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#addthing" ></use>
                      </svg>
                
                </div>
            </div>
            <div class="items_o">
                  <div class="item_o">
                      <div class="svg_i">
                          <svg  class="svg_p" fill="#7a8187">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#personimg" ></use>
                          </svg>
                      </div>
                      <div class="svg_text">相册</div>
                  </div>
                  <div class="item_o">
                       <div class="svg_i">
                          <svg  class="svg_p" fill="#7a8187">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shot" ></use>
                          </svg>
                      </div>
                      <div class="svg_text">拍摄</div>
                  </div>
                  <div class="item_o">
                        <div class="svg_i">
                          <svg  class="svg_p" fill="#7a8187">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#camera" ></use>
                          </svg>
                      </div>
                      <div class="svg_text">视频聊天</div>
                  </div>
                  <div class="item_o">
                        <div class="svg_i">
                          <svg  class="svg_p" fill="#7a8187">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#positions" ></use>
                          </svg>
                      </div>
                      <div class="svg_text">位置</div>
                  </div>
                  <div class="item_o">
                        <div class="svg_i">
                          <svg  class="svg_p" fill="#7a8187">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#redbag" ></use>
                          </svg>
                      </div>
                      <div class="svg_text">红包</div>
                  </div>
                  <div class="item_o">
                        <div class="svg_i">
                          <svg  class="svg_p" fill="#7a8187">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#banktransfer" ></use>
                          </svg>
                      </div>
                      <div class="svg_text">转账</div>
                  </div>
                  <div class="item_o">
                       <div class="svg_i">
                          <svg  class="svg_p" fill="#7a8187">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#person" ></use>
                          </svg>
                      </div>
                      <div class="svg_text">名片</div>
                  </div>
                  <div class="item_o">
                        <div class="svg_i">
                          <svg  class="svg_p" fill="#7a8187">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#voiceinput" ></use>
                          </svg>
                      </div>
                      <div class="svg_text">语音输入</div>
                  </div>
               
            </div>
        </div>
    </div>
</template>

<script>
import chat from "../../../config/Data/chat.js";
export default {
  name: 'HelloWorld',
  data () {
    return {
         chat:{
            "2018-5-6 12:00":[
                {name:"zyk",content:"在吗 宝贝"},
                {name:"czm",content:"在 亲爱的老公"}
            ],
            "2018-5-6 12:08":[
                {name:"zyk",content:"在吗 宝贝"},
                {name:"czm",content:"在 亲爱的老公"}
            ],
            "2018-5-6 12:06":[
                 {name:"zyk",content:"在吗 宝贝"},
                {name:"czm",content:"在 亲爱的老公"}
            ],
         },
        

        
        input_t:"",
        bottom_ext:false
    }
  },
  methods:{
    send(event){
      this.chat["2018-5-6 12:06"].push({name:"zyk",content:this.input_t})
      this.input_t=""
       this.$nextTick(() =>{
            var data=this.$refs.list;
            console.log(data.clientHeight)
            window.scrollTo(0,this.$refs.list.clientHeight)
       })  

    },
    bottom_show(){
      this.bottom_ext=!this.bottom_ext
    },
    removeother(){
      this.bottom_ext=false
    }
  },
  mounted(){
    
    
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
        background:  rgba(229, 229, 229, 1);
        padding:  0 0.81rem;
        border-bottom: 0.2rem solid #ebebeb;
        line-height: 3rem;
        color:#000;
        z-index: 999;
        right: 0;
        
        top: 0;
        left:0;
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
      height: auto;
      width: 100%;
      margin-top: 3rem;
      margin-bottom: 3rem;
     
    
      .time{
          text-align: center;
          margin-bottom: 0.5rem;
          font-size: 0.85rem;
          color: #666;
      }
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
           word-break: break-all;
           word-wrap: break-word;


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

      .bottom{
        bottom:16rem !important;
        transition: all .2s;
      }
      .footer{

          z-index: 10;
          position: fixed;
          bottom: 0;
          height:3.06rem;
          background: rgba(246, 246, 246, 1);
          width: 100%;
          left: 0;
          right: 0;
         

          .items_o{
            height:16rem;
            
            background: rgba(246, 246, 246, 1);
            flex-wrap: wrap;
            bottom: 0;
            display: flex;
            justify-content: center; 
          
           
            padding:1.408rem 1.1946666667rem 0;
            
            .item_o{

               width: 25%;
             
               height:3.8rem;;


              
              
              .svg_i{
                margin:0 auto;
                background: #fff;
                border-radius: 0.31rem;
                display:flex;
                justify-content: center;
								align-items:center;
                height:3.8rem;;
                width: 3.8rem;
                  
                    
                  
              }
              .svg_p{
               display: block;
                width: 1.9rem;
                height: 1.39rem;
              }
              .svg_text{
                
                width: 3.8rem;
                margin:0 auto;
                text-align: center;
                margin-top:0.5rem;
                font-size: 0.73rem;
                color:rgba(136, 136, 136, 1);
              }
              
            }
          }
         
          .contents{
               height:3.06rem;
              padding: 0.56rem 0.69rem;
              border-bottom: 0.01rem solid rgba(220, 220, 220, 1);
              .svg_v,.svg_o{
                padding: 0.2rem 0;
              }
             .svg_v{

                float: left;
                height: 1.61rem;
                width: 1.61rem;
              }
              .svg_o{
                float: right;
                svg{
                  height: 1.61rem;
                   width: 1.61rem;
                }
                .addthing{
                  width: 2rem;
                }
              }
              .svg_input{ 
                  overflow: hidden;
                    outline:none;
                  height: 2rem;
                  padding: 0 0.5rem;
                  font-size: 1.2rem;
                  background: rgba(255, 255, 255, 1);
                  margin: 0 1rem ;  
                  border: 0.06rem solid rgba(229, 229, 229, 1);
                  border-radius: 0.19rem;
                  line-height: 2rem;

                 
                
              }

          }
          
      }


</style>
