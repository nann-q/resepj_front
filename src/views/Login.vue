<template>
  <div>
    <div>
      <RegisterHeader/>
    </div>
    <div class="form">
      <h2 class="form__ttl">Login</h2>
      <form>
        <div class="form__content">
          <input
          type="email"
          id="email"
          v-model="email"
          class="form__item"
          placeholder="Email">
        </div>
        <div class="form__content">
          <input
          type="password"
          id="password"
          v-model="password"
          class="form__item"
          placeholder="Password">
        </div>
        <div class="form__btn">
          <button
          type="submit"
          @click="login">
          ログイン
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import RegisterHeader from '../components/RegisterHeader.vue';
export default {
  components:{
    RegisterHeader
  },
  data(){
    return{
      email:"",
      password:"",
    };
  },
  methods:{
    login(){
      this.$store.dispatch('login',{
        email:this.email,
        password:this.password
      })
      .then(response=>{
        console.log(response);
        this.$router.replace("/mypage");
      })
      .catch(error=>{
        alert(error);
      });
    }
  }
}
</script>
<style scoped>
.form{
  height: 240px;
}
</style>