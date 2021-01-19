## vuex

vue create vuex

 npm i vuex -S

#### state

1. state映射

   ```js
   // computed: mapState(["count"]),
   
   // computed: {
   //   ...mapState(["count"]),
   // },
   
   computed: mapState({
       newCount: state => state.count * 3
   }),
   
   ```

#### mutations

1. mutations映射

   ```js
   methods: mapMutations(['add', 'reduce'])
   methods: {
       ...mapMutations(['add', 'reduce'])
   }
   ```

   