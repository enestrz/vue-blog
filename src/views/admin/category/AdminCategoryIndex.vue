<template>
  <h1>
      Category Page
  </h1>
  <router-link to="/admin/category/create">Add New Category</router-link>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="category in categories" :key="category.id" >
        <td> {{ category.id }} </td>
        <EditCategory :category="category" />
        <td>
          <button @click="deleteCategory(category.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  
  <router-view/>
</template>

<script>
import EditCategory from '../../../components/EditCategory.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
export default {
  components: {EditCategory},
  setup(){
     
    const categories = ref([])
    const showEdit = ref(false)

    const loadCategories = async () => {
      let data = await axios.get('https://localhost:44356/api/Categories').then((res) => {
        return res.data
      }).catch((err) => {
        console.log(err)
      })
      categories.value = await data
    }

    const editCategory =  () => {
      
    }

    const deleteCategory = async (id) => {
      await axios.delete('https://localhost:44356/api/Categories/'+ id).then(res => {
        loadCategories()
      }).catch(err => {
        console.log(err)
      })
    }

    onMounted(loadCategories)
   
    return{ categories,showEdit, deleteCategory }
  }
}
</script>

<style>

</style>