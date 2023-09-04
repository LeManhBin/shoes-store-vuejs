<template lang="">
    <div class="px-[50px] mt-[160px]">
        <div class="flex gap-5 max-md:flex max-md:flex-col">
            <div class="flex-1 ">
                <img :src="productData?.thumbnail" alt="">
                <!-- <div class="flex items-center justify-between gap-2 w-full mt-5">
                    <img :src="productData?.thumbnail" alt="" class="w-[18%]">
                    <img :src="productData?.thumbnail" alt="" class="w-[18%]">
                    <img :src="productData?.thumbnail" alt="" class="w-[18%]">
                    <img :src="productData?.thumbnail" alt="" class="w-[18%]">
                    <img :src="productData?.thumbnail" alt="" class="w-[18%]">
                </div> -->
            </div>
            <div class="flex-1 ">
                <div class="border-b pb-[30px] flex items-center justify-between">
                    <div class="">
                        <h3 class="text-[24px] font-medium">{{productData?.name}}</h3>
                        <p class="text-[16px] font-semibold text-[#ff871d]">${{productData?.price}} USD</p>
                    </div>
                    <div class="w-[40px] h-[40px] rounded-full border-[1px] flex items-center justify-center cursor-pointer hover:bg-[#ff871d] hover:text-white">
                        <HeartOutlined :style="{fontSize: '18px'}" />
                    </div>
                </div>
                <p class="line-clamp-5 text-[13px] text-gray-500 my-[20px] leading-10">
                    {{productData?.intro}}
                </p>
                <div class="relative border px-[20px] py-[30px] text-[#28af5b]">
                    <h3 class="absolute top-0 left-[50px] translate-y-[-50%] bg-white px-2 font-semibold">Special Offer</h3>
                    <ul class="text-[15px] flex flex-col gap-2">
                        <li class="flex items-center gap-2">
                            <CaretRightOutlined :style="{fontSize: '20px'}"/>
                            In Stock
                        </li>
                        <li class="flex items-center gap-2">
                            <CaretRightOutlined :style="{fontSize: '20px'}"/>
                            Free Delivery Available*
                        </li>
                        <li class="flex items-center gap-2">
                            <CaretRightOutlined :style="{fontSize: '20px'}"/>
                            Sale 30% Off Use Code: Deal30
                        </li>
                    </ul>
                </div>
                <!-- <div class="flex gap-5 mt-[20px] items-center">
                    <p class="text-[18px] font-medium">SIZE</p>
                    <div class="w-[35px] h-[35px] border flex items-center justify-center cursor-pointer" v-for="(size, index) in productData?.size" :key="index">
                        {{size}}
                    </div>
                </div>
                <div class="flex gap-5 mt-[20px] items-center">
                    <p class="text-[18px] font-medium">COLOR</p>
                    <div v-for="(color,index) in productData.color" :key="index">
                        <input type="radio" name="color" :class="`bg-${color}`">
                    </div>
                </div> -->
                <div class="flex items-center gap-5 mt-5 border-b pb-[20px]">
                    <div class="flex">
                        <button class="w-[35px] h-[35px] border flex items-center justify-center " @click="handleChangeQuantity('decrease')">-</button>
                        <input type="number" :min="1" v-model="quantity" readonly class="w-[35px] h-[35px] outline-none text-center">
                        <button class="w-[35px] h-[35px] border flex items-center justify-center " @click="handleChangeQuantity('increase')">+</button>
                    </div>
                    <button class="h-[35px] w-[50%] bg-black text-white hover:bg-[#ff871d]" @click="handleAddToCard">ADD TO CARD</button>
                </div>
            </div>
        </div>
        <div class="flex gap-5 mt-[50px] justify-center flex-wrap">
            <WidgetProduct v-for="(item, index) in DataWidget" :key="index" :label="item.label" :image="item.image"/>
        </div>
        <div class="my-[50px] border-b py-[20px]">
            <Heading title="DESCRIPTION"/>
            <p class="text-[13px] font-normal text-gray-400 mt-[50px]">
                {{productData?.description}}
            </p>
        </div>
        <div class="">
            <Heading title="RELATED PRODUCTS"/>
            <div class="flex items-center justify-center flex-wrap gap-5 mt-[50px]">
                <CardProduct v-for="product in get4Item" :key="product.id" :product="product"/>
            </div>
        </div>
    </div>
</template>
<script>
    import {ref, onMounted, computed, watch} from "vue"
    import {HeartOutlined, CaretRightOutlined} from '@ant-design/icons-vue';
    import WidgetProduct from "../../components/WidgetProduct.vue";
    import {widgetProductData} from "../../constants/DataWidget"
    import Heading from "../../components/Heading.vue";
    import CardProduct from "../../components/Card.vue"
    import { useRoute } from "vue-router";
    import { useProductStore } from "../../stores/productStore";
    import {useCartStore} from "../../stores/cartStore"
import { useUserStore } from "@/stores/authStore";
import { useToast } from "vue-toastification";
    export default {
        name: "ProductDetail",
        components: {
            HeartOutlined,
            CaretRightOutlined,
            WidgetProduct,
            Heading,
            CardProduct
    },
        setup() {
            const quantity = ref(1)
            const DataWidget = ref(widgetProductData)
            const productStore = useProductStore()
            const cartStore = useCartStore()
            const userStore = useUserStore()
            const route = useRoute()
            const productId = route.params.id
            const toast = useToast()
            const productData = ref({});

            const handleAddToCard = () => {
                const cartData = {
                    product: productData.value,
                    quantity: quantity.value
                }
                if(!userStore.myUser.id) {
                    return toast.warning("You must login to add product")
                }
                cartStore.addToCart(cartData)
            }

            const handleChangeQuantity = (type) => {
                if(quantity.value < 1) {
                    quantity.value = 1
                    return alert("Quantity must be greater than or equal to 1")
                }
                if(type === "increase") {
                    quantity.value = quantity.value + 1
                }else if (type === "decrease") {
                    quantity.value = quantity.value - 1
                }
            }
            
            const handleGetProductById = (productId) => {
                productStore.actGetProductById(productId)
                .then(() => {
                    productData.value = productStore.product;
                })
            };

            const handleGetAllProducts = async () => {
                await productStore.actGetAllProducts()
            }

            watch(() => route.params.id, (newProductId) => {
                handleGetProductById(newProductId);
            });


            onMounted(() => {
                handleGetProductById(productId);
                handleGetAllProducts()
            });
            
            const get4Item = computed(() => {
                return productStore.products.slice(0,4)
            })


            return{
                DataWidget,
                productData,
                get4Item,
                handleChangeQuantity,
                quantity,
                handleAddToCard
            }
        }
}
</script>
<style scoped>
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield; /* Firefox */
    }
</style>