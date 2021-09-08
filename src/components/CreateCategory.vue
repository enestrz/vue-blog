<template>
  <form @submit.prevent="handleSubmit" action="post">
      <label for="name">Category Name: </label>
      <input type="text" name="name" v-model="categoryName" placeholder="Type a category name">

      <button type="submit">Add Category</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import axios from 'axios'
import { useRouter } from 'vue-router'
export default {
  setup(){
    const categoryName = ref('')
    const goBack = useRouter()

    const handleSubmit = async () => {
      await axios.post('https://localhost:44356/api/Categories', 
      {
        name: categoryName.value
      }).then((res) => {
        console.log(res)
        goBack.go(-1)
      }).catch((err) => {
        console.log(err)
      })
    }

    return {categoryName, handleSubmit}
  }
}
</script>

<style>

</style>