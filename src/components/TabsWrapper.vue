<template lang="">
    <div class=" text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex justify-around">
            <li 
                v-for="(title, index) in tabTitles" 
                :key="title"
                class="cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                :class="{ selected: selectedTitle === title}"

                @click="onChangeOrderStatus(index+1, title)"
            >
                {{ title }}
            </li>
        </ul>
        <slot></slot>
    </div>
</template>
<script>
import { useSlots, ref , provide} from 'vue'
export default {
    name: "TabsWrapper",
    setup(_, context) {
        const slots = useSlots()
        const tabTitles = ref(slots.default().map(tab => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])

        const onChangeOrderStatus = (status, title) => {
            selectedTitle.value = title
            context.emit("onChangeOrderStatus", status)
            
        }

        provide('selectedTitle', selectedTitle)

        return {
            tabTitles,
            selectedTitle,
            onChangeOrderStatus
        }
    }
}
</script>
<style scoped>
    .selected {
        color: #ff871d;
        border-bottom: 2px solid #ff871d;
        font-weight: bold;
    }
</style>