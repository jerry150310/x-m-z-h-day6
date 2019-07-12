<template>
  <div class="box"> 
        <header class="header">
            <i class="iconfont icon-xiangzuo"></i>
            <span>多加网</span>
            <i></i>
        </header>
        <div class="top">
              <img src="../../static/images/logo.png" alt="">
              <input type="text" value="热门搜索">
              <span>分类</span>
        </div>
        <div class="banner">
              <swiper>
                <!-- slides -->
                <swiper-slide><img src="../../static/images/banner.png" alt=""></swiper-slide>
              </swiper>
        </div>
        <div class="navs">
          <div>
            <img src="../../static/images/1.png" alt="">
            <p>成单奖励</p>
          </div>
           <div>
            <img src="../../static/images/1.png" alt="">
            <p>成单奖励</p>
          </div>
           <div>
            <img src="../../static/images/1.png" alt="">
            <p>成单奖励</p>
          </div>
           <div>
            <img src="../../static/images/1.png" alt="">
            <p>成单奖励</p>
          </div>
           <div>
            <img src="../../static/images/1.png" alt="">
            <p>成单奖励</p>
          </div>
           <div>
            <img src="../../static/images/1.png" alt="">
            <p>成单奖励</p>
          </div>
           <div>
            <img src="../../static/images/1.png" alt="">
            <p>成单奖励</p>
          </div>
           <div>
            <img src="../../static/images/1.png" alt="">
            <p>成单奖励</p>
          </div>
        </div>
        <img src="../../static/images/6.png" alt="">
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props:{

  },
  components:{
     swiper, 
     swiperSlide
  },
  data(){
    return {
    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
    .box{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .header{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        color: #fff;
        background: #1D1D28;
      }
      .top{
        width: 100%;
        height: 60px;
        background: #2CBB7E;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        color: #fff;
        input{
          flex: 1;
          margin: 0 10px;
          background: #fff;
          border-radius: 20px;
          outline: 0;
          border: 0;
          height: 35px;
          text-indent: 20px;
        }
      }
      .banner{
        width: 100%;
        height: 150px;
        background: #1D1D28;
        .swiper-container,.swiper-wrapper{
          width: 100%;
          height: 100%;
          .swiper-slide{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .navs{
        width: 100%;
        height: 150px;
        background: #1D1D28;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        div{
          width: 25%;
          text-align: center;
          color: #fff;
          font-size: 14px;
        }
      }
    }
</style>