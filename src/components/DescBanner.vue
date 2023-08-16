<template lang="">
    <div class="h-[100vh] max-md:h-[90vh] max-sm:h-[80vh] flex items-center justify-end max-sm:flex-col max-sm:gap-5" :class="{'flex-row-reverse': isReverse}">
        <div class="w-[60%] max-sm:w-full max-sm:text-center max-sm:flex max-sm:flex-col px-[100px] max-lg:px-[50px] max-sm:px-[20px] flex flex-col items-start gap-5 ">
            <h2 class="text-[50px] max-sm:mx-auto font-medium max-lg:text-[40px] max-md:text-[35px]">Sport Shoes</h2>
            <p class="font-medium text-[14px] max-lg:text-[12px]">Sports shoes are shoes used in sports activities or used when exercising to improve health. Now, sports shoes are also used in daily activities such as going to work, school, going out, ... because of its convenience and fashion. It is no coincidence that sports shoes are created and used every time you exercise or exercise.</p>
            <button class="bg-black max-sm:mx-auto text-white font-medium px-[40px] py-[15px] max-lg:px-[30px] max-lg:py-[10px]">SHOP NOW</button>
        </div>
        <div class="w-[40%] max-sm:w-[50%]">
            <img src="https://bisuth-store-demo.myshopify.com/cdn/shop/files/28.png?v=1657597432" alt="image" class="object-cover" >
        </div>
    </div>
</template>
<script>
export default {
    name: "DescBanner",
    props: {
        isReverse: {
            type: Boolean
        }
    }
}
</script>
<style lang="">
    
</style>