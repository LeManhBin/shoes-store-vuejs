<template lang="">
    <div class="flex flex-col items-center gap-5">
        <h3 class="text-[25px] font-medium relative before:content-[''] before:absolute before:left-[50%] before:translate-x-[-50%] before:bottom-0 before:h-[2px] before:bg-[#ff871d] before:w-[75px] ">{{title}}</h3>
        <p class="text-gray-500 text-[14px] font-medium">{{label}}</p>
    </div>
</template>
<script>
export default {
    name: "HeadingComponent",
    props: {
        title: {
            type:String
        },
        label: {
            type: String
        }
    }
}
</script>
<style scoped>

</style>