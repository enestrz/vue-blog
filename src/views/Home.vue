<template>
  <div class="home">
    <Blog/>
  </div>
</template>

<script>
import Blog from '../components/Blog.vue'
import axios from 'axios'
import { ref } from '@vue/reactivity'
export default {
  name: "Home",
  components: { Blog },
  setup(){
    // const weathers = ref([])
    // const load = async () => {
    //   let data = await axios.get('https://localhost:44356/WeatherForecast').then(response => {
    //     return response.data
    //   })
    //   weathers.value = await data
    // }

    // load()
    // return{ weathers }
  }
}
</script>

<style>
  
</style>
