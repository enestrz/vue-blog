<template>
    <div>
        <h2>Create a new category</h2>
        <CreateCategory />
        <button @click="router.go(-1)">Back</button>
    </div>

</template>

<script>
import CreateCategory from '../../../components/CreateCategory.vue'
import {useRouter} from 'vue-router'
export default {
    components: {CreateCategory},
    setup(){
        const router = useRouter()
         

        return {router}
    }
}
</script>

<style>

</style>