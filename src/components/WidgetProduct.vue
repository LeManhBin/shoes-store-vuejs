<template lang="">
    <div class="flex flex-col gap-3 items-center border py-[20px] px-[50px] max-w-[333px]" >
        <div class="w-[35px] text-[#ff871d]">
            <img :src="getImagePath(image)"  alt="">
        </div>
        <p class="tracking-[4px] text-center text-[14px] font-medium">{{label}}</p>
    </div>
</template>
<script>

export default {
    name: "WidgetProduct",
    props: {
        label: {
            type: String
        },
        image: {
            type: String
        }
    },
    setup() {

         const getImagePath = (cardName) => {
            return require(`../assets/images/${cardName}`);
        }

        return {
            getImagePath
        }
           
    }
}
</script>
<style lang="">
    
</style>