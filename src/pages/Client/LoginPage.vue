<template lang="">
    <div class="h-[100vh] flex">
        <div class="flex items-center justify-center w-[50%] max-md:w-[100%]">
            <div class="w-[300px] flex flex-col items-center">
                <h3 class="font-semibold text-[20px] mb-[30px]">LOGIN</h3>
                <form action="" class="flex flex-col items-center gap-5 w-[100%]" @submit.prevent="handleLogin">
                    <div class="flex flex-col gap-1 w-[100%]">
                        <label for="" class="text-[14px] font-semibold">Email</label>
                        <input type="text" v-model="account.email" placeholder="Email address" class="outline-none text-[13px] px-[10px] py-[7px] border-[1px]">
                    </div>
                    <div class="flex flex-col gap-1 w-[100%]">
                        <label for="" class="text-[14px] font-semibold">Password</label>
                        <div class="border-[1px]">
                            <input :type="isShow ? 'text' : 'password'" v-model="account.password" placeholder="Password" class="outline-none text-[13px] px-[10px] py-[7px] w-[90%]">
                            <EyeOutlined v-if="!isShow" :style="{cursor: 'pointer'}" @click="handleToggleShowPassword"/>
                            <EyeInvisibleOutlined v-if="isShow" :style="{cursor: 'pointer'}" @click="handleToggleShowPassword"/>
                        </div>
                    </div>
                    <button :type="submit" class="text-[16px] font-medium px-[40px] py-[10px] text-white bg-black ">LOGIN</button>
                </form>
                <p class="font-normal text-[13px] mt-5">I do not have an account? <span class="text-[#ff871d] cursor-pointer" @click="goRegisterPage">register</span></p>
            </div>
        </div>
        <div class="w-[50%] flex items-center justify-center max-md:hidden">
            <img class="w-[40%] object-cover" src="../../assets/images/login.png" alt="img" >
        </div>
    </div>
</template>
<script>
import { useUserStore } from '../../stores/authStore';
import { useRouter } from 'vue-router';
import {ref, onMounted} from "vue";
import {EyeOutlined, EyeInvisibleOutlined} from "@ant-design/icons-vue"
export default {
    name: "LoginPage",
    components: {
        EyeOutlined,
        EyeInvisibleOutlined
    },
    setup() {
        const router = useRouter();
        const userStore = useUserStore()
        const isShow = ref(false)

        const account = ref({
            email: "",
            password: "",
        })

        const handleToggleShowPassword = () => {
            isShow.value = !isShow.value
        }

        const handleLogin = async() => {
            await userStore.fetchLoginUser(account.value)
            if (userStore.isLogged === true && userStore.accessToken && userStore.myUser.isAdmin == true) {
                router.push("/admin");
            }else if(userStore.isLogged === true && userStore.accessToken && userStore.myUser.isAdmin == false) {
                router.push("/")
            }
        }
        const goRegisterPage = () => {
            router.push("/login-layout/register")
        }

        onMounted(() => {
          if(userStore.isLogged === true && userStore.accessToken) {
            router.push("/")
          }  
        })

        return {
            goRegisterPage,
            account,
            handleLogin,
            handleToggleShowPassword,
            isShow
        }
    }
}
</script>
<style >

</style>