<template lang="">
    <div class="border-r w-[100%] h-[100%]">
        <div class="h-[80px] flex items-center justify-center">
            <img src="https://bisuth-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657773108" alt="logo" class="w-max h-[20px]">
        </div>
        <ul class="px-[20px] mt-5 flex flex-col gap-8">
            <li class="cursor-pointer bg-gray-300 flex items-center gap-1 px-[10px] py-[7px] text-[15px] rounded-full font-semibold">
                <router-link to="/admin/dashboard">
                    <BarChartOutlined :style="{fontSize: '20px'}"/>
                    Dashboard
                </router-link>
            </li>
            <li class="cursor-pointer bg-gray-300 flex items-center gap-1 px-[10px] py-[7px] text-[15px] rounded-full font-semibold">
                <router-link to="/admin/order">
                    <ShoppingOutlined :style="{fontSize: '20px'}"/>
                    Order
                </router-link>
            </li>
            <li class="cursor-pointer bg-gray-300 flex items-center gap-1 px-[10px] py-[7px] text-[15px] rounded-full font-semibold">
                <router-link to="/admin/product">
                    <SkinOutlined :style="{fontSize: '20px'}"/>
                    Product
                </router-link>
            </li>
            <li class="cursor-pointer bg-gray-300 flex items-center gap-1 px-[10px] py-[7px] text-[15px] rounded-full font-semibold">
                <router-link to="/admin/user">
                    <TeamOutlined :style="{fontSize: '20px'}"/>
                        User
                </router-link>
            </li>
            <li class="cursor-pointer bg-gray-300 flex items-center gap-1 px-[10px] py-[7px] text-[15px] rounded-full font-semibold">
                <router-link to="/admin/blog">
                    <TeamOutlined :style="{fontSize: '20px'}"/>
                        Blog
                    </router-link>
            </li>
            <li class="cursor-pointer bg-gray-300 flex items-center gap-1 px-[10px] py-[7px] text-[15px] rounded-full font-semibold">
                <router-link to="/admin/config">
                    <SettingOutlined :style="{fontSize: '20px'}"/>
                        Config
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {BarChartOutlined, SkinOutlined, SettingOutlined, ShoppingOutlined, TeamOutlined} from "@ant-design/icons-vue"
export default {
    name: "SidebarComponent",
    components: {
        BarChartOutlined,
        SkinOutlined,
        SettingOutlined,
        ShoppingOutlined,
        TeamOutlined
    }
}
</script>
<style scoped>
    .router-link-active {
        color: #ff871d;
    }
</style>