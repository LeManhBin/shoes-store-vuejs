<template lang="">
    <div class="w-full flex flex-col h-[500px] justify-between gap-5">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center">
                            Customer Name
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Phone Number
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Address
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Total Money
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" v-for="order in orderData" :key="order.id">
                        <th class="px-6 py-4 text-center">
                            {{order?.name}}
                        </th>
                        <td class="px-6 py-4 text-center">
                            {{order?.phoneNumber}}
                        </td>
                        <td class="px-6 py-4 text-center">
                            {{order?.address}}
                        </td>
                        <td class="px-6 py-4 text-center text-green-600 font-semibold">
                            ${{totalPayment(order)}}
                        </td>
                        <td class="px-6 py-4 text-center">
                            {{order?.status}}
                        </td>
                        <td class="px-6 py-4 text-center ">
                            <button href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2" @click="goDetailOrder(order?.id)">View</button> 
                            <button href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="pagination mx-auto flex items-center gap-3 flex-nowrap">
            <button class="w-[30px] h-[30px] border" :class="{'bg-black text-white': pageNumber === (currentPage ?? 1), 'text-black bg-white': pageNumber !== (currentPage ?? 1)}" v-for="pageNumber in pageArray" :key="pageNumber" @click="goToPage(pageNumber)">
                {{ pageNumber }}
            </button>
        </div>
    </div>
</template>
<script>
import {onMounted, computed} from "vue"
import { useOrderStore } from '@/stores/orderStore';
import { useRouter } from "vue-router";

export default {
    name: "AdminOrderPage",
    setup() {
        const orderStore = useOrderStore()
        const router = useRouter()

        const goDetailOrder = (id) => {
            router.push(`/admin/order/${id}`)
        }

        const handleGetAllOrder = async() => {
           await orderStore.actGetAllOrder()
        }

        onMounted(() => {
          handleGetAllOrder()  
        })

        
        const totalPayment = (order) => {
            return order.products.reduce((total, item) => {
                return total + item.product.price * item.quantity;
            },0);
        }
        
        const orderData = computed(() => {
            const startIndex = (orderStore.currentPage - 1) * orderStore.itemsPerPage;
            const endIndex = startIndex + orderStore.itemsPerPage;
            return orderStore.orders.slice(startIndex, endIndex);
        })
        // Phân trang
        
        const pageArray = computed(() => {
            const arr = [];
            for (let i = 1; i <= orderStore.totalPages; i++) {
                arr.push(i);
            }
            return arr;
        });

        const goToPage = (pageNumber) => {
            orderStore.currentPage = pageNumber;
        };

        const currentPage = computed(() => {
            return orderStore.currentPage
        })
        return {
            orderData,
            totalPayment,
            pageArray,
            goToPage,
            currentPage,
            goDetailOrder
        }
    }
}
</script>
<style lang="">
    
</style>