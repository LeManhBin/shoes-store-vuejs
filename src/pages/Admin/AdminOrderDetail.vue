<template lang="">
    <div>
        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
                <h4 class="font-bold text-[15px]">Orderer's name:</h4>
                <p class="text-[15px]">{{orderStore.order.name}}</p>
            </div>
            <div class="flex items-center gap-2">
                <h4 class="font-bold text-[15px]">Phone number:</h4>
                <p class="text-[15px]">{{orderStore.order.phoneNumber}}</p>
            </div>
            <div class="flex items-center gap-2">
                <h4 class="font-bold text-[15px]">Address:</h4>
                <p class="text-[15px]">{{orderStore.order.address}}</p>
            </div>
            <div class="flex items-center gap-2">
                <h4 class="font-bold text-[15px]">Note:</h4>
                <p class="text-[15px]">{{orderStore.order.note}}</p>
            </div>
            <div class="flex items-center gap-2">
                <h4 class="font-bold text-[15px]">Total order amount:</h4>
                <p class="text-[15px] font-semibold text-green-500">${{totalPayment}}</p>
            </div>

        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Thumbnail
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                        Quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="product in productData" :key="product.id">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{product.product.name}}
                    </th>
                    <td class="px-6 py-4 w-[80px] h-[80px]">
                        <img :src="product.product.thumbnail" alt="">
                    </td>
                    <td class="px-6 py-4">
                        ${{product.product.price}}
                    </td>
                    <td class="px-6 py-4 text-center">
                        {{product.quantity}}
                    </td>
                    <td class="px-6 py-4">
                        ${{handleCalPriceAndQuantity(product.product.price, product.quantity)}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { useOrderStore } from '@/stores/orderStore';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: "AdminOrderDetail",
    setup() {
        const route = useRoute()
        const orderId = ref(route.params.id)
        const orderStore = useOrderStore()
        console.log(orderId.value);

        const handleGetOrderById = async(orderId) => {
            await orderStore.actGetOrderById(orderId)
        }

        onMounted(() => {
            handleGetOrderById(orderId.value)
        })

        watch(orderId, (newOrderId) => {
            console.log("mew", newOrderId);
        })

        const productData = computed(() => {
            return orderStore.order.products
        })

        //tính giá từng hàng 
        const handleCalPriceAndQuantity = (price, quantity) => {
            const realPrice = price * quantity
            return realPrice
        }

        //Tông tiền đơn hàng
        const totalPayment = computed(() => {
            return orderStore.order.products?.reduce((total, item) => {
                return total + item.product.price * item.quantity;
            },0);
        })
        return  {
            productData,
            handleCalPriceAndQuantity,
            orderStore,
            totalPayment
        }
    }
}
</script>
<style lang="">
    
</style>