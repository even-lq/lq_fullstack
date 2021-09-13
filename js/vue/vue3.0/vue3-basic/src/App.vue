<template>
  <h1>{{ count }}</h1>  
  <h1>{{ double }}</h1>
  <h1 v-if="loading">Loading!...</h1>
  <img v-if="loaded" :src="result.message" alt="">
  <button @click="openModal">Open Modal</button>
  <modal :isOpen="modalIsOpen" @close-modal="closeModal">My Modal!!!</modal>
  <h1>{{ double }}</h1>
  <h1>{{ double }}</h1>
  <ul>
    <li v-for="number in numbers" :key="number">
      <h1>{{ number }}</h1>
    </li>
  </ul>  
  <h1>{{ person.name }}</h1>
  <h1>x: {{ x }}, y: {{ y }}</h1>
  <button @click="increase">+1</button>
  <p>{{ error }}</p>
  <Suspense>
    <template #default>
      <dog-show />
    </template>
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs, watch, onErrorCaptured } from 'vue';
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
import Modal from './components/Modal.vue'
import DogShow from './components/DogShow.vue'
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string; }
}
interface DogResult {
  message: string;
  status: string;
}
interface CatResult {
  id: string; 
  url: string; 
  width: number;
  height: number;
}
export default defineComponent({
  name: 'App',
  components: {
    Modal,
    DogShow
  },
  setup() {
    const error = ref(null);
    onErrorCaptured((e: any) => {
      error.value = e;

      // 表示是否把错误往上抛
      return true;
    })
    const data: DataProps = reactive({
      count: 0,
      increase: () => { data.count++ },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    });
    const { x, y } = useMousePosition();
    const {
      result,
      loading,
      loaded
    } = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random');
    watch(result, () => {
      // console.log(result.value);
      if (result.value) {
        console.log('value', result.value.message);
      }
    })
    const modalIsOpen = ref(false);
    const openModal = () => {
      modalIsOpen.value = true;
    }
    const closeModal = () => {
      modalIsOpen.value = false;
    }
    data.numbers[0] = 5;
    data.person.name = 'lq';
    return {
      ...toRefs(data),
      x,
      y,
      result,
      loading,
      loaded,
      modalIsOpen,
      openModal,
      closeModal,
      error
    };
  }
  
});
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
