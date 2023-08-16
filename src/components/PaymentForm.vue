<template lang="">
    <div  v-if="isPayment" class="fixed z-30 bg-black opacity-70 inset-0" @click="handleTogglePayment"></div>
    <div class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[700px] z-40 bg-white shadow-xl border px-[30px] py-[30px]" :class="{'hidden': !isPayment}">
        <div class="absolute right-[20px] top-[10px] bg-gray-200 w-[25px] h-[25px] rounded flex items-center justify-center cursor-pointer" @click="handleTogglePayment">
            <CloseOutlined :style="{fontSize: '14px'}"/>
        </div>
        <HeadingComponent title="Edit Payment Method"/>
        <div>
            <form action="">
                <div class="flex items-center justify-between gap-3">
                    <div class="flex flex-col gap-1 mb-3 flex-1">
                        <label for="" class="font-semibold text-[14px]">Name</label>
                        <input type="text" v-model="paymentRef.name" placeholder="Enter your name" class="outline-none border px-[10px] py-[5px] text-[14px]">
                    </div>
                    <div class="flex flex-col gap-1 mb-3 flex-1">
                        <label for="" class="font-semibold text-[14px]">Phone Number</label>
                        <input type="text" v-model="paymentRef.phoneNumber" placeholder="Enter your phone number" class="outline-none border px-[10px] py-[5px] text-[14px]">
                    </div>
                </div>
                <div class="flex flex-col gap-1 mb-3">
                    <label for="" class="font-semibold text-[14px]">Address</label>
                    <input type="text" v-model="paymentRef.address"  placeholder="Enter your address" class="outline-none border px-[10px] py-[5px] text-[14px]">
                </div>
                <div class="flex flex-col gap-1 mb-5">
                    <label for="" class="font-semibold text-[14px]">Note</label>
                    <textarea  placeholder="Enter your note" v-model="paymentRef.note" name="" id="" cols="30" rows="5" class="outline-none border px-[10px] py-[5px] text-[14px]" ></textarea>
                </div>
                <button class="px-[10px] py-[5px] bg-black text-white font-semibold" @click="handlePayment">Payment</button>
            </form>
        </div>
    </div>
</template>
<script>
import {CloseOutlined} from "@ant-design/icons-vue"
import HeadingComponent from "../components/Heading.vue"
import {ref} from "vue"
import { useUserStore } from "@/stores/authStore"
import { useCartStore } from "@/stores/cartStore"
import { useOrderStore } from "@/stores/orderStore"


export default {
    name: "PaymentForm",
    components: {
        HeadingComponent,
        CloseOutlined
    },
    props: {
        handleTogglePayment: {
            type: Function
        },
        isPayment: {
            type: Boolean
        }
    },
    setup(props) {

        const userStore = useUserStore()
        const cartStore = useCartStore()
        const orderStore  = useOrderStore()
        const paymentRef = ref({
            userId: userStore.myUser.id,
            name: "",
            phoneNumber: "",
            address: "",
            note: "",
            status: 1,
            products: cartStore.cartItems,
            createAt: Date.now()
        })

        const handlePayment = async (e) => {
            e.preventDefault();
            const choice = confirm("Mời bạn xác nhận!");
            if (choice == true) {
                orderStore.actCreateOrder(paymentRef.value)
                .then(() => {
                    paymentRef.value = {
                        userId: userStore.myUser.id,
                        name: "",
                        phoneNumber: "",
                        address: "",
                        note: "",
                        status: 1,
                        products: cartStore.cartItems,
                        createdAt: Date.now(),
                    }
                    cartStore.clearCart()
                })
                props.handleTogglePayment()
            }
        }

        return {
            paymentRef,
            handlePayment,
        }
    }
}
</script>
<style lang="">
    
</style>