<template>
  <div>
    <div>
      <RegisterHeader/>
    </div>
    <div class="form">
      <h2 class="form__ttl">Registration</h2>
      <form>
        <div class="form__content">
          <input
          type="name"
          id="name"
          v-model="user_name"
          class="form__item"
          placeholder="Username">
        </div>
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
          @click="register">
          登録
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import RegisterHeader from '../components/RegisterHeader.vue';
import axios from "axios";
export default {
  components:{
    RegisterHeader
  },
  data(){
    return{
      user_name:"",
      email:"",
      password:""
    };
  },
  methods:{
    register(){
      axios.post("http://127.0.0.1:8000/api/v1/register",{
        user_name:this.user_name,
        email:this.email,
        password:this.password
      })
      .then(response=>{
        console.log(response);
        this.$router.replace('/thanks');
      })
      .catch(error=>{
        alert(error);
      });
    }
  }
};
</script>
<style>
.form{
  width: 450px;
  height: 270px;
  margin: 250px auto;
  border: 1px solid grey;
  border-radius: 5px;
}
.form form{
  padding: 30px;
}
.form__ttl{
  background: tomato;
  color: white;
  padding: 20px;
}
.form__content{
  padding-bottom: 20px;
}
.form__item{
  width: 100%;
  font-size: 18px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1p solid grey;
}
.form__btn{
  text-align: right;
}
.form__btn button{
  color: white;
  background: tomato;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
}
</style>

