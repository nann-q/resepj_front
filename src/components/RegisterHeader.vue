<template>
    <div>
      <div class="menu" @click='active=!active'>
        <span
        class="menu__line--top"
        :class="{'menu__rotate--top':active}">
        </span>
        <span
        class="menu__line--middle"
        :class="{'menu__rotate--middle':active}">
        </span>
        <span class="menu__line--bottom"        :class="{'menu__rotate--bottom':active}">
        </span>
        <h1 class="menu-ttl"
        :class="{'menu__hidden-ttl':active}">Rese</h1>
      </div>

      <transition name="nav"
      @click='active=!active'>
        <div class="nav" v-show="active">
          <ul>
            <li><a @click="$router.push('/')">Home</a></li>
            <li><a @click="$router.push('/register')">Registration</a></li>
            <li><a @click="$router.push('/login')">Login</a></li>
          </ul>
        </div>
      </transition>
    </div>
</template>
<script>
export default {
  data(){
    return{
      active:false
    }
  }
}
</script>
<style>
/* button */
.menu{
  position: fixed;
  top: 20px;
  left:50px;
  width:50px;
  height: 46px;
  border-radius: 5px;
  background: orange;
  cursor: pointer;
}
.menu-ttl{
  display: inline-block;
  font-size: 40px;
  color: orange;
  margin-left: 60px;
}
.menu__hidden-ttl{
  display: none;
}
.menu__line--top,
.menu__line--middle,
.menu__line--bottom{
  position: absolute;
  height: 3px;
  left: 5px;
  right: -5px;
  background: white;
  transition: 0.5s;
}
.menu__line--top{
  top:10px;
  width: 50%;
}
.menu__line--middle{
  top:21px;
  width:80%;
}
.menu__line--bottom{
  top:34px;
  width:30%;
}
.menu__rotate--top{
  transform:rotate(45deg);
  top:21px;
  width:80%;
  transition: 0.5s;
}
.menu__rotate--middle{
  opacity:0;
  transition: 0.5s;
}
.menu__rotate--bottom{
  transform: rotate(-45deg);
  top:21px;
  width: 80%;
  transition: 0.5s;
}
/* content */
.nav{
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.nav li {
  list-style: none;
  padding-bottom: 20px;
  color:orange;
  font-size: 30px;
  cursor: pointer;
}
</style>