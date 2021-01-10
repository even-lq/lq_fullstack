<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img
          width="64"
          height="64"
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2944606985,3722907313&fm=11&gp=0.jpg"
          alt=""
        />
      </div>

      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊（回龙观）</span>
          <span class="brand"></span>
        </div>
        <div class="description">蜂鸟专送/38分钟送达</div>
        <div class="support">
          <img src="./decrease_1@2x.png" alt="" />
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
    </div>

    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
@import '../../common/stylus/variable';

.header 
  position: relative;
  overflow: hidden;
  color: $color-white;
  background: $color-backgroud-ss;
  .content-wrapper 
    position: relative;
    display: flex;
    padding: 24px 12px 18px 24px;
    align-items center
    .avatar
      flex 0 0 64px
      margin-right 16px
</style>