<template>
  <div>
    <div>
      <RegisterHeader/>
    </div>
    <div class="thanks">
      <p class="thanks__msg">会員登録ありがとうございます。</p>
      <div class="thanks__btn">
        <button
          type="submit"
          @click="$router.push('/login')">
          ログインする
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import RegisterHeader from '../components/RegisterHeader.vue'
export default {
  components:{
    RegisterHeader
  }
}
</script>
<style>
.thanks{
  width: 500px;
  height: 250px;
  margin: 200px auto;
  border: 1px solid grey;
  text-align: center;
}
.thanks__msg{
  font-size: 25px;
  padding: 50px;
}
.thanks__btn button{
  color: white;
  background: tomato;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
}
</style>
