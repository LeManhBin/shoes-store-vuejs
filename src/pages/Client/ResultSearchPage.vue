<template lang="">
    <div class="mt-[160px]">
        <HeadingComponent :title="`SEARCH`"/>
        <div class="mt-[50px] flex items-center justify-center flex-wrap gap-5">
            <CardProduct v-for="product in searchData" :key="product.id" :product="product"/>
        </div>
    </div>
</template>
<script>
import { useProductStore } from "@/stores/productStore";
import HeadingComponent from "../../components/Heading.vue"
import {computed} from "vue"
import CardProduct from "../../components/Card.vue";
export default {
    name: "ResultSearchPage",
    components: {
        HeadingComponent,
        CardProduct
    },
    setup() {
        const productStore = useProductStore()
        const searchData = computed(() => {
            return productStore.productSearch
        })

        return {
            searchData
        }
    }
}
</script>
<style lang="">
    
</style>