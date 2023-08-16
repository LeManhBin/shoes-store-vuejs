<template lang="">
    <div class="mt-[160px] max-sm:mt-[100px]">
        <HeadingComponent title="ABOUT US"/>
        <div class="px-[100px] max-sm:px-[20px] xl:px-[200px] my-[50px] flex flex-col gap-[50px]">
            <AboutWidget image="https://bisuth-store-demo.myshopify.com/cdn/shop/files/about1.1.png?v=1657683547" title="Our Story" label="THE HIGH STRESS FAVOUTIRE" firstContent="Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa." secondContent="In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."/>
            <AboutWidget :isReverse="true" image="https://bisuth-store-demo.myshopify.com/cdn/shop/files/about1.2.png?v=1657683547" title="Who We Are ?" label="THE HIGH STRESS FAVOUTIRE" firstContent="Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa." secondContent="In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."/>
        </div>
    </div>
</template>
<script>
import HeadingComponent from "../../components/Heading.vue";
import AboutWidget from "../../components/AboutWidget.vue"
export default {
    name: "AboutPage",
    components: {
        HeadingComponent,
        AboutWidget
    }
}
</script>
<style lang="">
    
</style>