<template>
    <div>
        <div class="top">
            <div class="top_content" >
              <svg-icon icon-class="goback" />
              <div class="num"><u>100</u></div>
              <div class="text"><b>文件传输助手</b></div>
              <svg-icon icon-class="other" class="other"/>
            </div>
        </div>
        <div></div>
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
    .top{
       
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
        .goback ,.other{
        
          height: 1.5rem;
          width: 1.5rem;

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
</style>
