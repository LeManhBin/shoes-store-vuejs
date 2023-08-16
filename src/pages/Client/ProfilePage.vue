<template lang="">
    <div class="mt-[160px] px-[100px] flex items-start gap-5">
        <div class="flex-[1] bg-slate-400 flex items-center gap-3">
            <!-- <img src="" alt="avatar" class="w-10 h-10 bg-black rounded-full"> -->
            <span src="" class="w-10 h-10 bg-gray-500 flex text-center justify-center text-[24px] font-bold rounded-full">B</span>
            <div class="">
                <p class="text-[14px]">Le Manh Bin</p>
                <p class="text-[13px] font-medium text-gray-500 cursor-pointer"><EditOutlined :style="{fontSize: '14px'}"/> edit profile</p>
            </div>
        </div>
        <div class="flex-[4] min-h-[400px]">
            <TabsWrapper @onChangeOrderStatus="handleChangeStatus">
                <TabItem title="Wait for confirmation">
                    <div v-for="order in orderByStatus" :key="order.id" >
                        <CardPurchase v-for="(product, index) in order?.products" :key="index" :product="product"/>
                    </div>
                </TabItem>
                <TabItem title="Confirmed">Content from Tab 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, ipsa.</TabItem>
                <TabItem title="Delivering">Content from Tab 4 Lorem ipsum dolor sit amet.</TabItem>
                <TabItem title="Delivered">Content from Tab 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ab minima. Facere mollitia tempora soluta, commodi beatae sit. Distinctio.</TabItem>
            </TabsWrapper>
        </div>
    </div>
</template>
<script>
import {EditOutlined} from "@ant-design/icons-vue";
import TabsWrapper from "../../components/TabsWrapper.vue"
import TabItem from "../../components/TabItem.vue"
import CardPurchase from "../../components/CardPurchase.vue"
import { useOrderStore } from "@/stores/orderStore";
import { useUserStore } from "@/stores/authStore";
import { computed, onMounted, ref, watch } from "vue";
export default {
    name: "ProfilePage",
    components: {
        EditOutlined,
        TabsWrapper,
        TabItem,
        CardPurchase
    },
    setup() {
        const orderStore = useOrderStore()
        const userStore = useUserStore()
        const userId = ref(userStore.myUser.id)
        const orderStatus = ref(1)

        const handleChangeStatus = (status) => {
            orderByStatus.value = status
        }

        const handleGetOrderByUserId = async(id) => {
            await orderStore.actGetOrderByIdUser(id)
        }

        watch(userId, (newUserId) => {
            console.log(newUserId);
            handleGetOrderByUserId(newUserId.value)
        })

        onMounted(() => {
            handleGetOrderByUserId(userId.value)
        })

        const orderByStatus = computed(() => {
            if (orderStore.orders && orderStore.orders.length > 0) {
                return orderStore.orders.filter(order => order.status === orderStatus.value);
            }
            return [];
        });

        return {
            orderByStatus,
            handleChangeStatus
        }
    }
    
}
</script>
<style lang="">
    
</style>