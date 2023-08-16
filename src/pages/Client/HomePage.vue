<template lang="">
    <div>
        <!-- HomeBanner -->
        <HomeBanner/>
        <!-- Second Banner -->
        <DescBanner/>
        <!-- Product best seller -->
        <div class="mt-[50px]">
            <HeadingComponent :title="'BEST SELLER'" label="Best Seller Product This Week!"/>
            <div class="mt-[100px] max-md:mt-[50px] flex items-center justify-center flex-wrap gap-5 max-sm:gap-2">
                <CardProduct v-for="product in get8Item" :key="product.id" :product="product"/>
            </div>
        </div>
        <!-- Second Banner -->
        <DescBanner :isReverse="true"/>
        <!-- Product HOT DEAL -->
        <div class="mt-[50px]">
            <HeadingComponent :title="'HOT DEAL'" label="Don't Miss Today's Featured Deals"/>
            <div class="mt-[100px] max-md:mt-[50px] flex items-center justify-center flex-wrap gap-5">
                <CardProduct v-for="product in get4Item" :key="product.id" :product="product"/>
            </div>
        </div>
        <!-- Blog -->
        <div class="mt-[50px]">
            <HeadingComponent :title="'OUR BLOGS'" label=""/>
            <div class="mt-[100px] max-md:mt-[50px] px-5 flex items-center justify-center gap-5 max-md:flex-wrap">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>
    </div>
</template>
<script>
import HomeBanner from '../../components/HomeBanner.vue';
import DescBanner from "../../components/DescBanner.vue";
import HeadingComponent from "../../components/Heading.vue";
import CardProduct from "../../components/Card.vue";
import BlogCard from "../../components/BlogCard.vue";
import {onMounted, computed} from "vue"
import {useProductStore} from "../../stores/productStore"
export default {
    name: "HomePage",
    components: {
        HomeBanner,
        DescBanner,
        HeadingComponent,
        CardProduct,
        BlogCard
    },
    setup() {
        const productStore = useProductStore()
        
        const handleGetAllProducts = async () => {
            await productStore.actGetAllProducts()
        }
        onMounted(() => {
            handleGetAllProducts()
        })

        const get8Item = computed(() => {
            return productStore.products.slice(0,8)
        })

        const get4Item = computed(() => {
            return productStore.products.slice(0,4)
        })

        return {
            get8Item,
            get4Item
        }
    }
}
</script>
<style lang="">
    
</style>