<template lang="">
    <div class="flex min-h-[100vh]">
        <div class="w-[15%]">
            <SidebarComponent/>
        </div>
        <div class="flex flex-col w-[85%]">
            <NavbarComponent/>
            <div class="px-[20px] py-[20px]">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import SidebarComponent from "../components/Sidebar.vue"
export default {
    name: "AdminLayout",
    components: {
        NavbarComponent,
        SidebarComponent
    }
}
</script>
<style lang="">
    
</style>