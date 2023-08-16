<template lang="">
    <div>
        <PaymentForm :isPayment="isPayment" :handleTogglePayment="handleTogglePayment"/>
        <div v-if="isCart" class="fixed z-30 inset-0 bg-black opacity-70" @click="handleToggleCart"></div>
        <div class="fixed bottom-0 w-[400px] max-sm:w-[90%] bg-white z-50 h-[100vh] ease-in-out duration-300" :class="{'right-0': isCart, 'right-[-100%]': !isCart}">
            <div class="h-[50px] border-b flex items-center justify-between">
                <div class="w-[50px] h-[50px] border-r flex items-center justify-center" @click="handleToggleCart">
                    <CloseOutlined :style="{fontSize: '16px', cursor: 'pointer', fontWeight: '600'}"/>
                </div>
                <h4 class="flex items-center justify-center font-semibold">Shopping Cart</h4>
                <div class="w-[50px] h-[50px] border-l flex items-center justify-center font-semibold">
                    {{quantityProductInCart}}
                </div>
            </div>
            <div v-if="quantityProductInCart === 0" class="relative h-full">
                <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-5">
                    <h4 class="font-semibold text-[20px] max-sm:text-[16px] whitespace-nowrap">Your shopping bag is empty</h4>
                    <button class="px-[30px] py-[20px] max-sm:px-[20px] max-sm:py-[10px] text-[16px] text-white bg-black font-semibold hover:bg-[#ff871d] ease-in-out duration-300" @click="goToShop">GO TO THE SHOP</button>
                </div>
            </div>
            <div class="mt-5 px-[5px]">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-2 py-3 text-center">
                                Image
                            </th>
                            <th scope="col" class="px-2 py-3 text-center">
                                Name
                            </th>
                            <th scope="col" class="px-2 py-3 text-center">
                                Quantity
                            </th>
                            <th scope="col" class="px-2 py-3 text-center">
                                Price
                            </th>
                            <th scope="col" class="px-2 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(item, index) in dataCarts" :key="index">
                            <th scope="row" class="w-[100px] h-[50px]">
                                <img :src="item?.product?.thumbnail" alt="img">
                            </th>
                            <td class=" text-center px-2 text-[14px]">
                                {{item?.product?.name}}
                            </td>
                            <td class=" text-center px-2 text-[14px] font-semibold">
                                {{item?.quantity}}
                            </td>
                            <td class=" text-center px-2 text-[14px] font-semibold">
                                ${{item?.product?.price}}
                            </td>
                            <td class=" text-center px-2">
                                <button class="w-[10%] hover:text-[#ff871d]" @click="handleDeleteToCart(item?.product?.id)">
                                    <DeleteOutlined :style="{fontSize: '20px'}"/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="absolute bottom-0 h-[60px] border-t w-full flex items-center px-[20px] justify-between">
                <p class="font-semibold">Total Payment: <span class="text-green-600">${{totalPaymentCarts}}</span></p> 
                <button class="px-[10px] py-[5px] text-[14px] bg-black text-white hover:bg-[#ff871d]" @click="handleTogglePayment">Payment</button>
            </div>
        </div>
    </div>
</template>
<script>
import { useCartStore } from "@/stores/cartStore";
import {CloseOutlined, DeleteOutlined} from "@ant-design/icons-vue"
import { useRouter } from "vue-router";
import {computed, ref} from "vue"
import PaymentForm from "../components/PaymentForm.vue"
import { useToast } from "vue-toastification";

export default {
    name: "CartSide",
    components: {
        CloseOutlined,
        DeleteOutlined,
        PaymentForm
    },
    props: {
        isCart: {
            type: Boolean
        },
        handleToggleCart: {
            type: Function
        },
        quantityProductInCart: {
            type: Number
        }
    },
    setup(props, context) {
        const toast = useToast()
        const router = useRouter()
        const cartStore = useCartStore()
        const isPayment = ref(false)

        const closeCartSide = () => {
            context.emit("closeCartSide", false)
        }
        const handleTogglePayment = () => {
            if(cartStore.cartItems.length <= 0) {
                toast.warning("Cart is empty")
            }else {
                isPayment.value = !isPayment.value
                closeCartSide()
            }
        }
        const goToShop = () => {
            router.push("/product")
            props.handleToggleCart()
        }

        const handleDeleteToCart = (id) => {
            cartStore.deleteToCart(id)
        }

        const dataCarts = computed(() => {
            return cartStore.cartItems
        })

        const totalPaymentCarts = computed(() => {
            return cartStore.cartItems.reduce((total, item) => {
                return total + item.product.price * item.quantity;
            },0);
        });


        return {
            goToShop,
            dataCarts,
            totalPaymentCarts,
            handleDeleteToCart,
            isPayment,
            handleTogglePayment,
            closeCartSide
        }
    }
}
</script>
<style lang="">
    
</style>