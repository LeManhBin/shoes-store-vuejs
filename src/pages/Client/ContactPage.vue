<template lang="">
    <div class="mt-[160px] max-sm:mt-[100px]">
        <HeadingComponent title="CONTACT"/>
        <div class="flex justify-center my-[50px]">
            <form action="" class="max-sm:w-[90%]">
                <div  class="flex gap-5 mb-[15px] max-sm:flex-col">
                    <div class="flex flex-col flex-1">
                        <label for="" class="font-medium text-[14px]">Name</label>
                        <input type="text" placeholder="Enter your name" class="text-[14px] outline-none px-[10px] py-[5px] border">
                    </div>
                    <div class="flex flex-col flex-1">
                        <label for="" class="font-medium text-[14px]">Email</label>
                        <input type="text" placeholder="Enter your email" class="text-[14px] outline-none px-[10px] py-[5px] border">
                    </div>
                </div>
                <div class="flex flex-col  mb-[15px]">
                    <label for="" class="font-medium text-[14px]">Subject</label>
                    <input type="text" placeholder="Enter your subject" class="text-[14px] outline-none px-[10px] py-[5px] border">
                </div>
                <div class="flex flex-col">
                    <label for="" class="font-medium text-[14px]">Message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message" class="text-[14px] outline-none px-[10px] py-[5px] border"></textarea>
                </div>
                <div class="mt-[15px] flex justify-center">
                    <button class="bg-black text-[#fff] px-[15px] py-[5px] text-[14px] font-semibold">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import HeadingComponent from "../../components/Heading.vue"
export default {
    name: "ContactPage",
    components: {
        HeadingComponent
    }
}
</script>
<style lang="">
    
</style>