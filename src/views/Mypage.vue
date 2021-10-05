<template>
  <div>
    <LoginHeader/>
    <div class="rese_status">
      <p class="rese_status_ttl">予約状況</p>
      <div class="rese_content">
        <p class="rese_content_num">予約</p>
        <button class="rese_del">×</button>
        <div class="rese_detail">
          <p>Shop<span>w</span></p>
          <p>Date<span></span></p>
          <p>Tim<span></span></p>
          <p>Number<span></span></p>
        </div>
      </div>
    </div>
    <div class="like">
      <p class="name">{{ user.user_name }}さん</p>
      <p class="shop">お気に入り店舗</p>
      <div class="shop_list">
        <img src="https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg" alt="" class="shop_img">
        <div class="shop_content">
          <p class="shop_name">仙人</p>
          <p class="shop_area">#東京都</p>
          <p class="shop_genre">#寿司</p>
          <button class="shop_detail">詳しくみる</button>
          <button class="heart"><i class="fa-thin fa-heart like-btn"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginHeader from '../components/LoginHeader.vue'
import axios from "axios";
export default {
  components:{
    LoginHeader
  },
  data(){
    return {
      user:""
    };
  },
  mounted(){
    axios.get("http://127.0.0.1:8000/api/v1/register").then(response=>{
      this.user=response.data;
    });
  },
}
</script>
<style scoped>
.rese_status{
  margin: 200px 50px;
  display: inline-block;
}
.rese_status_ttl{
  font-size: 22px;
  margin-bottom: 20px;
}
.rese_content{
  background: orange;
  color: white;
  width: 500px;
  border-radius: 5px;
  padding: 20px;
}
.rese_content_num{
  display: inline-block;
}
.rese_del{
  margin-left: 85%;
}
.rese_detail p{
  margin: 20px 0;
}
.rese_detail span{
  margin-left: 70px;
}
/* like */
.like{
  display: inline-block;
  margin: 50px;
}
.name{
  font-size: 22px;
  margin-bottom: 50px;
}
.shop{
  font-size: 18px;
}
.shop_list{
  margin: 30px 50px 0 0;
}
</style>