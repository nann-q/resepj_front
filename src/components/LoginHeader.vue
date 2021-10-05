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

      <transition name="nav" @click='active=!active'>
        <div class="nav" v-show="active">
          <ul>
            <li><a @click="$router.push('/')">Home</a></li>
            <li><a @click="$router.push('/login')">Logout</a></li>
            <li><a @click="$router.push('/mypage')">Mypage</a></li>
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