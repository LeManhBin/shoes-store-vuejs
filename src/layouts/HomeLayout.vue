<template >
    <div class="container mx-auto">
        <HeaderComponent/>
        <router-view></router-view>
        <FooterComponent/>
    </div>
</template>
<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue"
export default {
    name: "HomeLayout",
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>
<style lang="scss">
    
</style>