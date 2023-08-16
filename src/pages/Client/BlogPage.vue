<template lang="">
    <div class="mt-[160px] max-sm:mt-[100px]">
        <HeadingComponent title="BLOG"/>
        <div class="mt-[100px] max-md:mt-[50px] px-5 grid grid-cols-3 max-md:grid grid-cols-2 gap-5"> 
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    </div>
</template>
<script>
import HeadingComponent from "../../components/Heading.vue"
import BlogCard from "../../components/BlogCard.vue"
export default {
    name: "BlogPage",
    components: {
        HeadingComponent,
        BlogCard
    }
}
</script>
<style lang="">
    
</style>