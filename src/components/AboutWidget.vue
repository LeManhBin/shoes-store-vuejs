<template lang="">
    <div class="flex items-center gap-[50px] max-lg:gap-5 justify-between max-md:flex-col" :class="{'flex-row-reverse': isReverse}">
        <div class="flex-1 flex flex-col gap-7 max-sm:gap-3">
            <h1 class="text-[40px] max-lg:text-[30px] font-semibold">{{title}}</h1>
            <div class="flex items-center gap-4">
                <div class="h-[2px] w-[40px] max-lg:w-[20px] bg-[#ff871d]"></div>
                <p class="text-gray-400 tracking-[4px] text-[13px] max-lg:text-[11px] font-medium">{{label}}</p>
            </div>
            <div class="flex flex-col gap-4 text-[13px] max-lg:text-[11px] font-medium text-gray-500 leading-6">
                <p>{{firstContent}}</p>
                <p>{{secondContent}}</p>
            </div>
        </div>
        <div class="flex-1">
            <img :src="image" alt="image" class="object-cover hover:scale-90 ease-in-out duration-300">
        </div>
    </div>
</template>
<script>
export default {
    name: "AboutWidget",
    props: {
        isReverse: {
            type: Boolean
        },
        title: {
            type: String
        },
        label: {
            type: String
        },
        image: {
            type: String
        },
        firstContent: {
            type: String
        },
        secondContent: {
            type: String
        },
    }
}
</script>
<style lang="">
    
</style>