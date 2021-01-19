<template>
  <section>
    <header class="top_tips">
      <span class="num_tip" v-if="isHome">第一周</span>
      <span class="num_tip" v-else>第{{ itemNum }}题</span>
    </header>
    <!-- 首页 -->
    <div class="" v-if="isHome">
      <div class="home_logo item_container_style"></div>
      <router-link class="start button_style" to="/item"></router-link>
    </div>
    <!-- 答题页面 -->
    <div class="" v-else>
      <div class="item_back item_container_style">
        <div class="item_list_container">
          <header class="item_title">
            {{ itemDetail[itemNum - 1].topic_name }}
          </header>
          <ul>
            <li
              class="item_list"
              v-for="(item, index) in itemDetail[itemNum - 1].topic_answer"
              :key="index"
              @click="choose(index, item.is_standard_answer)"
            >
              <span
                class="option_style"
                :class="{ has_choosed: chooseNum == index }"
                >{{ chooseType(index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span
        class="next_item button_style"
        @click="nextItem"
        v-if="itemNum < itemDetail.length"
      ></span>
      <span
        class="submit_item button_style"
        @click="submitAnswer"
        v-else
      ></span>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["fatherComponent"],
  data() {
    return {
      isHome: false,
      chooseNum: null, // 选中的答案的索引
      REMEMBER_ANSWER: null, // 选中的答案的id
    };
  },
  computed: mapState(["itemDetail", "itemNum"]),
  created() {
    if (this.fatherComponent === "home") {
      // 出现首页的dom
      this.isHome = true;
      // document.body.style.backgroundImage
    }
  },
  methods: {
    ...mapActions(["addNum"]),
    // 选择选项显示的ABCD
    chooseType(type) {
      switch (type) {
        case 0:
          return "A";
          break;
        case 1:
          return "B";
          break;
        case 2:
          return "C";
          break;
        case 3:
          return "D";
          break;
        default:
          break;
      }
    },
    // 选中的答案高亮显示并保存答案
    choose(index, id) {
      this.chooseNum = index;
      this.chooseId = id;
    },
    nextItem() {
      if (this.chooseNum !== null) {
        // 清除choosedNum
        // 保存答案，题目索引+1，跳到下一题
        this.chooseNum = null;
        this.addNum(this.chooseId);
      } else {
        alert("你还没选答案哦！");
      }
    },
    // 交卷
    submitAnswer() {
      if (this.chooseNum !== null) {
        this.addNum(this.chooseId);
        this.$router.push('./score')
      } else {
        alert("你还没选答案哦！");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.top_tips {
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../../images/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: "黑体";
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}
.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 3rem;
}
.home_logo {
  background-image: url(../../images/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}
.item_back {
  background-image: url(../../images/2-1.png);
  background-size: 100% 100%;
}
.button_style {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
}
.start {
  background-image: url(../../images/1-4.png);
}
.next_item {
  background-image: url(../../images/2-2.png);
}
.submit_item {
  background-image: url(../../images/3-1.png);
}
.item_list_container {
  position: absolute;
  height: 7rem;
  width: 8rem;
  top: 2.4rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}
.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}
.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>