<template lang="">
    <div class="h-[80px] w-full border-b flex items-center justify-between px-[20px]">
        <h2>Hello</h2>
        <div class="flex items-center gap-2">
            <span class="w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center text-white text-[20px]"> 
                B
            </span>
            <p class="font-semibold text-[14px]">{{userStore.myUser.name}}</p>
        </div>
    </div>
</template>
<script>
import { useUserStore } from '@/stores/authStore';

export default {
    name: "NavbarComponent",
    setup() {
        const userStore = useUserStore()

        return {
            userStore
        }
    }
}
</script>
<style lang="">
    
</style>