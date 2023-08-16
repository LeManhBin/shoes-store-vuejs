<template lang="">
    <div class="mt-[50px]" v-show="selectedTitle === title">
        <slot></slot>
    </div>
</template>
<script>
import { inject } from 'vue'
export default {
    name: "TabItem",
    props: {
        title: String
    },
    setup() {
        const selectedTitle = inject('selectedTitle')


        return {
            selectedTitle
        }
    }
}
</script>
<style lang="">
    
</style>