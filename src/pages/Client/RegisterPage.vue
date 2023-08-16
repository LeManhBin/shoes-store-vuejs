<template lang="">
    <div class="h-[100vh] flex">
        <div class="w-[50%] flex items-center justify-center max-md:hidden">
            <img class="w-[40%] object-cover" src="../../assets/images/register.png" alt="img" >
        </div>
        <div class="flex items-center justify-center w-[50%] max-md:w-[100%]">
            <div class="w-[300px] flex flex-col items-center">
                <h3 class="font-semibold text-[20px] mb-[30px]">REGISTER</h3>
                <form action="" class="flex flex-col items-center gap-5 w-[100%]" @submit.prevent="handleRegister">
                    <div class="flex flex-col gap-1 w-[100%]">
                        <label for="" class="text-[14px] font-semibold">Name</label>
                        <input type="text" v-model="user.name" placeholder="Name" class="outline-none text-[13px] px-[10px] py-[7px] border-[1px]">
                    </div>
                    <div class="flex flex-col gap-1 w-[100%]">
                        <label for="" class="text-[14px] font-semibold">Email</label>
                        <input type="text" v-model="user.email" placeholder="Email address" class="outline-none text-[13px] px-[10px] py-[7px] border-[1px]">
                    </div>
                    <div class="flex flex-col gap-1 w-[100%]">
                        <label for="" class="text-[14px] font-semibold">Password</label>
                        <div class="border-[1px]">
                            <input :type="isShow ? 'text' : 'password'" v-model="user.password" placeholder="Password" class="outline-none text-[13px] px-[10px] py-[7px] w-[90%]">
                            <EyeOutlined v-if="!isShow" :style="{cursor: 'pointer'}" @click="handleToggleShowPassword"/>
                            <EyeInvisibleOutlined v-if="isShow" :style="{cursor: 'pointer'}" @click="handleToggleShowPassword"/>
                        </div>
                    </div>
                    <button :type="submit" class="text-[16px] font-medium px-[40px] py-[10px] text-white bg-black">REGISTER</button>
                </form>
                <p class="font-normal text-[13px] mt-5">I already have an account? <span class="text-[#ff871d] cursor-pointer" @click="goLoginPage">Login</span></p>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from "vue"
import { useRouter } from 'vue-router';
import {useUserStore} from '../../stores/authStore'
import {EyeOutlined, EyeInvisibleOutlined} from "@ant-design/icons-vue"
export default {
    name: "RegisterPage",
    components: {
        EyeOutlined,
        EyeInvisibleOutlined,
    },
    setup() {
        const router = useRouter();
        const userStore = useUserStore();
        const isShow = ref(false)
        const user = ref({
            name: "",
            email: "",
            password: "",
            isAdmin: false
        })

        const handleToggleShowPassword = () => {
            isShow.value = !isShow.value
        }

        const handleRegister = async() => {
            await userStore.fetchRegisterUser(user.value)
        }

        const goLoginPage = () => {
            router.push("/login-layout")
        }

        return {
            goLoginPage,
            user,
            handleRegister,
            isShow, 
            handleToggleShowPassword,
        }
    }
}
</script>
<style >

</style>