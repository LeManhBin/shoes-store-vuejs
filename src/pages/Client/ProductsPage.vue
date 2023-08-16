<template lang="">
    <div class="mt-[160px] max-sm:mt-[100px]">
        <HeadingComponent title="PRODUCTS"/>
        <div class="mt-[50px] flex items-center justify-center flex-wrap gap-5">
            <CardProduct v-for="product in data" :key="product?.id" :product="product"/>
        </div>
    </div>
</template>
<script>
import { useProductStore } from "../../stores/productStore";
import CardProduct from "../../components/Card.vue";
import { onMounted, computed } from "vue";
import HeadingComponent from "../../components/Heading.vue"
export default {
    name: "ProductsPage",
    components: {
        CardProduct,
        HeadingComponent
    },
    setup(){
        const productStore = useProductStore()

        const handleGetAllProduct = async () => {
            await productStore.actGetAllProducts()
        }
        
        onMounted(() => {
            handleGetAllProduct()
        })

        const data = computed(() => {
            return productStore.products
        })

        return {
            data
        }
    }
}
</script>
<style lang="">
    
</style>