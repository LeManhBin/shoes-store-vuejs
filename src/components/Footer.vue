<template lang="">
    <footer class="h-[400px] max-lg:h-max border-t-[1px] py-[50px] mt-[50px]  px-[50px] flex justify-evenly flex-wrap max-lg:gap-[50px] max-lg:justify-start">
        <div class="flex flex-col gap-7">
            <img src="https://bisuth-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657773108" alt="logo" class="w-max h-[20px] max-sm:w-[50%]">
            <p class="font-normal text-[13px]">Sophisticated simplicity for the independent mind.</p>
            <div class="flex items-center gap-5">
                <div class="hover:text-[#1DA1F2]">
                    <TwitterOutlined :style="{fontSize:'20px'}"/>
                </div>
                <div  class="hover:text-[#ea4c89]">
                    <DribbbleOutlined :style="{fontSize:'20px'}"/>
                </div>
                <div class="hover:text-[#fac100]">
                    <BehanceOutlined :style="{fontSize:'20px'}"/>
                </div>
                <div class="hover:text-[#E1306C]">
                    <InstagramOutlined :style="{fontSize:'20px'}"/>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <h3 class="font-semibold relative before:content-[''] before:bg-black before:absolute before:bottom-[-10px] before:h-[1px] before:w-[40px]">Help & Information</h3>
            <ul class="font-normal text-[13px] flex flex-col gap-3">
                <li class="hover:text-[#ff871d]">Pagination</li>
                <li class="hover:text-[#ff871d]">Terms & Condition</li>
                <li class="hover:text-[#ff871d]">Contact</li>
                <li class="hover:text-[#ff871d]">Home page</li>
                <li class="hover:text-[#ff871d]">Term of us</li>
            </ul>
        </div>
        <div class="flex flex-col gap-6">
            <h3 class="font-semibold relative before:content-[''] before:bg-black before:absolute before:bottom-[-10px] before:h-[1px] before:w-[40px]">About Us</h3>
            <ul class="font-normal text-[13px] flex flex-col gap-3">
                <li class="hover:text-[#ff871d]">Help Center</li>
                <li class="hover:text-[#ff871d]">Address Store</li>
                <li class="hover:text-[#ff871d]">Privacy Policy</li>
                <li class="hover:text-[#ff871d]">Receivers & Amplifiers</li>
                <li class="hover:text-[#ff871d]">Clothings</li>
            </ul>
        </div>
        <div class="flex flex-col gap-6">
            <h3 class="font-semibold relative before:content-[''] before:bg-black before:absolute before:bottom-[-10px] before:h-[1px] before:w-[40px]">Categories</h3>
            <ul class="font-normal text-[13px] flex flex-col gap-3">
                <li class="hover:text-[#ff871d]">Delivery</li>
                <li class="hover:text-[#ff871d]">Legal Notice</li>
                <li class="hover:text-[#ff871d]">Documentation</li>
                <li class="hover:text-[#ff871d]">Secure payment</li>
                <li class="hover:text-[#ff871d]">Stores</li>
            </ul>
        </div>
    </footer>
</template>
<script>
import {TwitterOutlined, DribbbleOutlined, BehanceOutlined, InstagramOutlined} from "@ant-design/icons-vue"
export default {
    name: "FooterComponent",
    components: {
        TwitterOutlined,
        DribbbleOutlined,
        BehanceOutlined,
        InstagramOutlined
    }
}
</script>
<style lang="">
    
</style>