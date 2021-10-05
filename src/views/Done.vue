<template>
  <div>
    <div>
      <LoginHeader/>
    </div>
    <div class="thanks">
      <p class="thanks__msg">ご予約ありがとうございます。</p>
      <div class="thanks__btn">
        <button
          type="submit"
          @click="$router.push('/mypage')">
          戻る
        </button>
      </div>
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