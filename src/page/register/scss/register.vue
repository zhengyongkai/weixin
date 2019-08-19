<template>
    <div>
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
            <div><input type="text" class="tele"/></div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
        
    }
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
        top: 6.83rem;
        color: rgba(80, 80, 80, 1);
        font-size: 1.27rem;
        line-height: 150%;
        height: 2.56rem;
        width: 9.93rem;
    }
    .form{
        display: flex;
        position: relative;
        left: 1.6rem;
        right: 1.6rem;
        top:13.87rem;
        border-top: 1px solid #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
        border:1px solid red;
        .quhao{
            
           
        }
        .tele{

        }
        

    }
    .country{
        display: flex;
        position: relative;
        left: 1.6rem;
        top: 11.46rem;
          border:1px solid red;
        @include fontStyle(.81rem,.81rem);
    }
    .guojia{
        width: 4.03rem;
        height: 1.2rem;
        text-align: left;
        margin-right: 1.14rem;
    }




</style>

