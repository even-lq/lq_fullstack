<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ state.count }} * 2 = {{ double }}</h1>
  <h2>{{ num }}</h2>
  <button @click="add">累加</button>

  <ul>
    <Fragment :data="[5, 3, 4, 1, 8, 9, 2]" />
  </ul>

  <TeleportDemo />

  <Suspense>
    <template #default>
      <AsyncComponent :timeout="3000" />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense> -->
  <TodoList />
</template>

<script>
// composition API
import { reactive, computed, ref, onMounted } from 'vue'
// import Fragment from '@/components/Fragment'
// import TeleportDemo from '@/components/Teleport'
// import AsyncComponent from '@/components/AsyncComponent'
// import Loading from './components/Loading'
import TodoList from './components/TodoList'

export default {
  // 入口
  setup() {
    // const state = reactive({
    //   count: 1
    // })
    const { state, double } = useCounter(1)
    let num = ref(2)

    // const double = computed(() => state.count * 2)

    function add() {
      state.count++;
      num.value += 10
    }

    onMounted(() => {
      console.log('onMounted');
    })

    // 以下是TodoList代码

    return {
      state,
      double,
      add,
      num
    }
  },
  components: {
    // Fragment,
    // TeleportDemo,
    // AsyncComponent,
    // Loading
    TodoList
  }
}

function useCounter(count) {
  const state = reactive({
    count
  })

  const double = computed(() => state.count * 2)

  return {
    state,
    double
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
