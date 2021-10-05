<template>
  <div>
    <div>
      <RegisterHeader/>
      <div class="search">
        <select name="" id="area-select">
          <option value="">All area</option>
          <option value="東京都">東京都</option>
          <option value="大阪府">大阪府</option>
          <option value="福岡県">福岡県</option>
        </select>
        <select name="" id="genre-select">
          <option value="">All genre</option>
          <option value="寿司">寿司</option>
          <option value="焼肉">焼肉</option>
          <option value="居酒屋">居酒屋</option>
          <option value="寿司">イタリアン</option>
          <option value="寿司">ラーメン</option>
        </select>
        <input type="text"
        name="shop_name"
        placeholder="Search...">
      </div>
    </div>
    <div v-for="item in shops" :key="item.id">
      <div class="shops">
        <img :src="item.img_url">
        <div class="shop_content">
          <p class="shop_name">{{ item.shop_name }}</p>
          <p class="shop_area">#{{ item.shop_area }}</p>
          <p class="shop_genre">#{{ item.shop_genre }}</p>
          <button class="shop_detail"
          @click="shopdetail(item.id)">
          詳しくみる
          </button>
          <button class="heart" @click="heart"><i class="fa-thin fa-heart like-btn"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RegisterHeader from '../components/RegisterHeader.vue'
import axios from "axios";
export default {
  components:{
    RegisterHeader
  },
  data(){
    return{
      shops:[
        {shop_name:""}
      ]
    };
  },
  methods:{
    async created(){
      const item = await axios.get(
        "http://127.0.0.1:8000/api/v1"
      );
        this.shops=item.data.data;
        console.log(this.shops);
    }
  },
}
</script>
<style>
.search{
  margin: 25px 0 0 60%;
}
.search select{
  padding: 10px 30px;
  border-right: none;
  color: grey;
}
.search input{
  padding: 10px 100px 10px 30px;
}
.shops{
  display: inline-block;
  width: 300px;
  margin: 50px 0px 20px 50px;
  border: 1px solid;
  border-radius: 5px;
}
.shop_img{
  width: 100%;
}
.shop_content{
  padding: 20px;
}
.shop_name{
  font-size: 20px;
  font-weight: bold;
}
.shop_area,
.shop_genre{
  display: inline-block;
  padding-right: 10px;
  font-size: 12px;
}
.shop_detail{
  background: orange;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
}
/* heart */
</style>