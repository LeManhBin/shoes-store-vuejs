<template lang="">
    <div class="max-w-[318px] px-3 pb-5 flex flex-col items-center gap-5 ">
        <div class="relative overflow-hidden hover-card">
            <div class="max-h-[300px] max-w-[300px] max-md:w-[250px] max-sm:w-[150px] max-sm:h-[150px] cursor-pointer">
                <img :src="product?.thumbnail" alt="thumbnail"  @click="goDetailProduct(product?.id)"/>
            </div>
            <div class="action-card absolute left-[50%] translate-x-[-50%] flex items-center gap-5 ">
                <div class="cursor-pointer w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#ff871d] hover:text-white" @click="goDetailProduct(product?.id)">
                    <EllipsisOutlined :style="{fontSize: '20px'}" />
                </div>
                <div class="cursor-pointer w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#ff871d] hover:text-white">
                    <SearchOutlined :style="{fontSize:'20px'}"/>
                </div>
                <div class="cursor-pointer w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#ff871d] hover:text-white">
                    <HeartOutlined :style="{fontSize: '20px', cursor: 'pointer'}"/>
                </div>
            </div>
        </div>
        <div class="text-center">
            <p class="text-[15px] font-semibold">{{product?.name}}</p>
            <p class="font-bold text-[#ff871d]">${{product?.price}}</p>
        </div>
    </div>
</template>
<script>
import {SearchOutlined, EllipsisOutlined, HeartOutlined} from "@ant-design/icons-vue";
import { useRouter } from 'vue-router';
export default {
    name:"CardProduct",
    components: {
        EllipsisOutlined,
        SearchOutlined,
        HeartOutlined
    },
    props: {
        product: {
            type: Object
        }
    },
    setup() {

        const router = useRouter()

        const goDetailProduct = (id) => {
            router.push(`/product/${id}`)
        }

        return {
            goDetailProduct
        }
    }
}
</script>
<style scoped>
    .hover-card {
        transition: transform 0.5s ease-in-out; /* Áp dụng transition cho thuộc tính transform */
    }
    .hover-card:hover .action-card {
        bottom: 20px;
        transition: bottom 0.5s ease-in-out 0.2s; /* Áp dụng transition cho bottom và độ trễ là 0.2s */
    } 

    .action-card {
        bottom: -60px;
        transition: bottom 0.5s ease-in-out; /* Áp dụng transition cho bottom */
    }


</style>