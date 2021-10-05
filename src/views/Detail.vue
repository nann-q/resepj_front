<template>
  <div>
    <LoginHeader/>
    <div class="shop">
      <button class="back_button">＜</button>
      <p class="shop_name">仙人</p>
      <img src="https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg" alt="" class="shop_img">
        <div class="shop_content">
          <p class="shop_area">#東京都</p>
          <p class="shop_genre">#寿司</p>
          <p class="shop_content">料理長厳選の食材から作る寿司を用いたコースをぜひお楽しみください。食材・味・価格、お客様の満足度を徹底的に追及したお店です。特別な日のお食事、ビジネス接待まで気軽に使用することができます。</p>
        </div>
    </div>
    <div class="rese">
      <div class="rese_content">
        <p class="rese_ttl">予約</p>
        <form action="rese" class="rese_form">
          <div>
            <input type="date" class="rese_form_date" required>
          </div>
          <div>
            <select name="time" id="time" class="rese_form_time">
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
          </div>
          <div>
            <select name="num" id="num" class="rese_form_num">
              <option value="1人">1人</option>
              <option value="2人">2人</option>
              <option value="3人">3人</option>
              <option value="4人">4人</option>
            </select>
          </div>
        </form>
        <div class="rese_detail">
          <p>Shop<span></span></p>
          <p>Date<span></span></p>
          <p>Time<span></span></p>
          <p>Number<span></span></p>
        </div>
      </div>
      <button class="rese_btn">予約する</button>
    </div>
  </div>
</template>
<script>
import LoginHeader from '../components/LoginHeader.vue'
export default {
  components:{
    LoginHeader
  }
}
</script>
<style scoped>
/* shop */
.shop{
  margin:100px 50px;
  width:600px;
  display: inline-block;
}
.back_button{
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid grey;
  background: white;
  font-weight: bold;
  cursor: pointer;
}
.shop_name{
  display: inline-block;
  font-size: 22px;
  margin-left: 10px;
  margin-bottom: 30px;

}
.shop_area,
.shop_genre{
  font-size: 16px;
}
.shop_content{
  padding: 20px 0;
  line-height: 2;
}
/* reservation */
.rese{
  display: inline-block;
  background-color: orange;
  width: 600px;
  border-radius: 5px;
  margin-left: 30px;
}
.rese_content{
  padding:50px 30px 0 30px;
}
.rese_ttl{
  color:white;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}
.rese_form_date,
.rese_form_time,
.rese_form_num{
  border: none;
  padding: 5px 0;
  border-radius: 5px;
  margin-bottom: 10px;
}
.rese_form_date{
  width: 30%;
}
.rese_form_time,
.rese_form_num{
  width:100%;
}
.rese_detail{
  background-color: tomato;
  color: white;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 200px;
  border-radius: 5px;
}
.rese_detail p{
  margin: 20px 0;
}
.rese_detail span{
  margin-left: 70px;
}
.rese_btn{
  background-color: grey;
  border: none;
  color: white;
  width:100%;
  padding: 10px;
  cursor: pointer;
  border-radius: 0 0 5px 5px;
}
</style>
