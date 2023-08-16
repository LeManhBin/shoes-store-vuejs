<template lang="">
    <SearchSection :isSearch="isSearch" :handleToggleSearch="handleToggleSearch"/>
    <header class="shadow-custom fixed mx-auto top-0 left-0 right-0 bg-white flex items-center justify-between px-[50px] py-[25px] max-sm:px-[20px] z-30 container">
        <div class="lg:hidden">
            <AlignLeftOutlined :style="{fontSize: '20px', cursor: 'pointer'}" @click="handleToggleNavbar"/>
        </div>
        <img src="https://bisuth-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1657773108" alt="logo" class="w-max h-[20px] cursor-pointer" @click="goHomePage">
        <div v-if="isOpenNav" class="fixed z-10 inset-0 bg-black opacity-70" @click="handleToggleNavbar"></div>
        <ul :class="`flex items-center gap-[40px] max-lg:gap-0 font-semibold max-lg:flex-col max-lg:items-start max-lg:absolute z-20 max-lg:bg-white max-lg:top-0 max-lg:w-[320px] max-[320px]:w-[90%] max-lg:h-screen ease-in-out duration-300 ${isOpenNav ? 'max-lg:left-0' : 'max-lg:left-[-100%]'}`">
            <li class="flex items-center lg:hidden max-lg:border max-lg:w-full">
                <span class="w-[40%] py-[15px] px-[10px] bg-black h-full font-semibold text-white flex justify-center">MENU</span>
                <span v-if="isLogin" class="w-[40%] py-[15px] px-[10px] font-semibold flex justify-center gap-2 border-r " @click="handleLogOut">
                    <LogoutOutlined :style="{fontSize: '20px', cursor: 'pointer'}" />
                    LOGOUT
                </span>
                <span v-if="!isLogin" class="w-[40%] py-[15px] px-[10px] font-semibold flex justify-center gap-2 border-r " @click="goLogin">
                    <LoginOutlined :style="{fontSize: '20px', cursor: 'pointer'}"/>
                    LOGIN
                </span>
                <div class="w-[20%] h-full flex justify-center items-center">
                    <CloseOutlined :style="{fontSize: '20px'}"  @click="handleToggleNavbar"/>
                </div>
            </li>
            <li @click="handleCloseNavbar" class="nav-item max-lg:px-[10px] max-lg:py-[15px] max-lg:border max-lg:w-full">
                <router-link to="/">HOME</router-link>
            </li>
            <li @click="handleCloseNavbar" class="nav-item max-lg:px-[10px] max-lg:py-[15px] max-lg:border max-lg:w-full">
                <router-link to="/product">PRODUCT</router-link>
            </li>
            <li @click="handleCloseNavbar" class="nav-item max-lg:px-[10px] max-lg:py-[15px] max-lg:border max-lg:w-full">
                <router-link to="/about">ABOUT</router-link>
            </li>
            <li @click="handleCloseNavbar" class="nav-item max-lg:px-[10px] max-lg:py-[15px] max-lg:border max-lg:w-full">
                <router-link to="/blog">BLOG</router-link>
            </li>
            <li @click="handleCloseNavbar" class="nav-item max-lg:px-[10px] max-lg:py-[15px] max-lg:border max-lg:w-full">
                <router-link to="/contact">CONTACT</router-link>
            </li>
        </ul>
        <div class="flex items-center gap-5 max-sm:gap-3">
            <div>
                <SearchOutlined :style="{fontSize: '20px', cursor: 'pointer'}" @click="handleToggleSearch"/>
            </div>
            <div class="max-lg:hidden" @click="goProfilePage">
                <UserOutlined :style="{fontSize: '20px', cursor: 'pointer'}"/>
            </div>
            <div class="max-lg:hidden">
                <HeartOutlined :style="{fontSize: '20px', cursor: 'pointer'}"/>
            </div>
            <div class="relative">
                <span class="absolute  top-0 right-[-5px] flex items-center justify-center text-[10px] h-[15px] w-[15px] bg-[#ff871d] text-white rounded-full">{{quantityProductInCart}}</span>
                <ShoppingOutlined :style="{fontSize: '20px', cursor: 'pointer'}" @click="handleToggleCart"/>
            </div>
            <div class="max-lg:hidden">
                <LogoutOutlined v-if="isLogin" :style="{fontSize: '20px', cursor: 'pointer'}" @click="handleLogOut"/>
            </div>
            <button v-if="!isLogin" class="max-lg:hidden px-[10px] py-[5px] bg-black text-white text-[14px]" @click="goLogin">LOGIN</button>
        </div>
    </header>
    <CardSide :handleToggleCart="handleToggleCart" :isCart="isCart" :quantityProductInCart="quantityProductInCart" @closeCartSide="handleCloseCartSide"/>
</template>
<script>
import {SearchOutlined, ShoppingOutlined,HeartOutlined, UserOutlined, LogoutOutlined, CloseOutlined, AlignLeftOutlined, LoginOutlined} from "@ant-design/icons-vue";
import SearchSection from "../components/SearchSection.vue";
import {ref, computed} from "vue"
import { useUserStore } from "@/stores/authStore";
import { useRouter } from 'vue-router';
import CardSide from "../components/CartSide.vue"
import { useCartStore } from "@/stores/cartStore";
export default {
    name: "HeaderComponent",
    components: {
        SearchSection,
        SearchOutlined,
        UserOutlined,
        HeartOutlined,
        ShoppingOutlined,
        LogoutOutlined,
        CardSide,
        CloseOutlined,
        AlignLeftOutlined,
        LoginOutlined
    },
    setup() {
        const userStore = useUserStore()
        const isLogin = ref(userStore.isLogged)
        const isSearch = ref(false)
        const isCart = ref(false)
        const isOpenNav = ref(false)
        const router = useRouter()
        const cartStore = useCartStore()

        const goHomePage = () => {
            router.push("/")
        }

        const goProfilePage = () => {
            router.push("/profile")
        }
        const handleToggleSearch = () => {
            isSearch.value = !isSearch.value
        }

        const handleToggleCart = () => {
            isCart.value = !isCart.value
        }

        const handleToggleNavbar = () => {
            isOpenNav.value = !isOpenNav.value
        }

        const handleCloseNavbar = () => {
            isOpenNav.value = false
        }

        const handleCloseCartSide = () => {
            isCart.value = false
        }

        const goLogin = () => {
            router.push("/login-layout")
        }

        const handleLogOut = () => {
            userStore.actLogout()
            router.push("/login-layout")
        }

        const quantityProductInCart = computed(() => {
            return cartStore.cartItems.length
        })
        return {
            isSearch,
            handleToggleSearch,
            isLogin,
            goLogin,
            handleLogOut,
            handleToggleCart,
            isCart,
            quantityProductInCart,
            handleCloseCartSide,
            handleToggleNavbar,
            isOpenNav,
            handleCloseNavbar,
            goHomePage,
            goProfilePage
        }
    }
}
</script>
<style scoped>
.shadow-custom {
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}
.nav-item {
    cursor: pointer;
    transition: .3s ease-in-out;
    position: relative;
    color: black;
}

.nav-item:hover {
    color: #ff871d;
}

.nav-item::before {
    content: "";
    height: 1px;
    position: absolute;
    background-color: #ff871d;
    bottom: 0;
    left: 0;
    width: 0;
    transition: width .3s ease-in-out;
}

.nav-item:hover::before {
    width: 100%;
}

.router-link-exact-active {
    color: #ff871d;
}

.router-link-exact-active::before {
    content: "";
    height: 1px;
    position: absolute;
    background-color: #ff871d;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: width .3s ease-in-out;
}
</style>