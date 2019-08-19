<template>
    <div>
        <top></top>
        <div class="title">
            <b>手机号登录</b>
        </div>
        <div class="country">
            <div class="guojia">
                国家/地区
            </div>
            <div>   
                中国
            </div>
        </div>
        <div class="form">
            <div class="quhao">+86</div>
            <div><input type="number"  placeholder="请输入手机号码" class="tele"/></div>
        </div>
        <div class="otherR">
            请输入微信号/QQ/邮箱登录
        </div>
        <div class="next">
            <button>下一步</button>
        </div>
    </div>
</template>

<script>
import  top from '../../components/tab/top';
export default {
  name: 'register',
  data () {
    return {
        
    }
  },
  components:{
      top
  },
  filters:{
    //电话拦截器 每四个字母添加一个空格
    teleFilter:function(value){
        value=" "+value;
        return  value.replace(/(.{4})/g,'$1 ');
    }
  },
}
</script>
<style lang="scss" scoped>
    @import "src/style/public";
    .title{
        position: relative;
        left: 1.6rem;
        top: 8rem;
        color: rgba(80, 80, 80, 1);
        font-size: 1.27rem;
        line-height: 150%;
        height: 2.56rem;
        width: 9.93rem;
    }
    .form{
        height: 1.8rem;    
        margin: 0 1.87rem;
        height: 2.4rem;
        line-height: 2.4rem;
        position: relative;;
        border-top: 1px solid #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
        display: flex;
        top:10rem;
        @include fontStyle(.81rem,2.41rem);
        .quhao{
            display: flex;
            position: relative;
            text-align: left;
            border-right: 1px solid #f1f1f1;
            width: 4rem;
        }
        .tele{
            padding:0 1rem;
            font-size: .85rem;
            width: 100%;
        }
        

    }
    .country{
        height: 1.8rem;    
        margin: 0 1.87rem;
        height: 2.4rem;
        position: relative;;
        display: flex;
        top:10rem;
        @include fontStyle(.81rem,2.41rem);
    }
    .guojia{
        width: 4.03rem;
        height: 1.2rem;
        text-align: left;
        margin-right: 1.14rem;
    }
    .otherR{
         position: relative;
         top: 12rem;
         font-size: 0.88rem;
         color: rgba(100, 114, 146, 1);
         margin: 0 1.87rem;
         
    }
    .next{
        position: relative;
        top: 14.8rem;
        margin: 0 1.87rem;
         
    }
    button{
        width: 100%;
        height: 2.4rem;
        background: rgba(10, 187, 7, 0.5);
        border: 1px solid rgba(124, 207, 122, 1);
        border-radius: .22rem;
        color: #fff;
        font-size: 1.03rem;
        flex-direction: row;
        align-items: center;
    
    }
    




</style>

