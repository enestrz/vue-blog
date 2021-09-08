<template>
    <td v-if="!showEdit" @dblclick="edit">
         {{ metin }} 
    </td>
    <td v-else @keyup.enter="ok(category.id)">
        <input type="text"  v-model="metin">
    </td>
  
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
    props: ['category'],
    setup(props){
        const metin = ref('')
        metin.value = props.category.name
        const showEdit = ref(false)

        const edit = () => {
            showEdit.value = !showEdit.value
        }

        const ok = async (id) => {
            await axios.put('https://localhost:44356/api/Categories/'+ id,{
                id: props.category.id,
                name: metin.value
            }
            ).then(res => {
                    showEdit.value = !showEdit.value
                }).catch(err => {
                    console.log(err)
                })
        }

        return {metin, showEdit, edit, ok}
    }
}
</script>

<style>

</style>