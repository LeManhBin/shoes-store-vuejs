<template lang="">
    <div>
        <div v-if="isSearch" class="fixed z-20 inset-0 bg-black opacity-70" @click="handleToggleSearch">

        </div>
        <div class="bg-white z-50 h-[70vh] flex flex-col items-center justify-center gap-5 fixed left-0 right-0 ease-in-out duration-500" :class="{'top-0': isSearch, 'top-[-100%]': !isSearch}">
            <div class="absolute top-[20px] right-[20px]" @click="handleToggleSearch">
                <CloseOutlined :style="{fontSize: '30px', cursor: 'pointer'}"/>
            </div>
            <h1 class="text-[36px] font-semibold text-center max-md:text-[30px] max-sm:text-[25px]">Start typing and hit Enter</h1>
            <div class="flex items-center justify-between w-[50%] max-md:w-[70%] shadow px-[15px] py-[15px]">
                <input type="text" v-model="textInput" @keyup.enter="handleSearch" placeholder="Search anything" class="w-[90%] outline-none"/>
                <SearchOutlined :style="{fontSize:'20px'}"/>
            </div>
        </div>
    </div>
</template>
<script>
import { useProductStore } from "@/stores/productStore"
import {SearchOutlined, CloseOutlined} from "@ant-design/icons-vue"
import {ref} from "vue"
import { useRouter } from "vue-router"
export default {
    name: "SearchSection",
    props: {
        isSearch: {
            type:Boolean
        },
        handleToggleSearch: {
            type:Function
        }
    },
    components: {
        SearchOutlined,
        CloseOutlined
    },
    setup(props) {
        const productStore = useProductStore()
        const textInput = ref("")
        const router = useRouter()

        const handleSearch = () => {
            productStore.actSearchProduct(textInput.value)
            .then(() => {
                router.push("/search")
                props.handleToggleSearch()
                textInput.value = ""
            })
        }
        return{
            textInput,
            handleSearch
        }
    }
}
</script>
<style lang="">
    
</style>