<template lang="">
    <div class="flex justify-center">
        <form action="" class="flex flex-col gap-5  w-[50%]" @submit.prevent="handleUpdate">
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Name Product</label>
                <input type="text" v-model="productUpdateRef.name" placeholder="Enter name product" class="border rounded px-[10px] py-[5px] text-[14px] outline-none">
            </div>
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Price</label>
                <input  type="number" v-model="productUpdateRef.price" placeholder="Enter price product" class="border rounded px-[10px] py-[5px] text-[14px] outline-none">
            </div>
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Thumbnail</label>
                <!-- <input type="string" v-model="productUpdateRef.thumbnail" placeholder="Enter price thumbnail" class="border rounded px-[10px] py-[5px] text-[14px] outline-none">
                 -->
                 <input type="file" id="input-image" ref="fileInput" @change="handleFileChange" class="hidden">
                <label for="input-image" class="flex justify-between border rounded px-[10px] py-[5px] text-[14px] outline-none">
                    <span>{{nameImage || 'image.jpg'}}</span>
                    <CloudUploadOutlined :style="{fontSize: '20px'}" />
                </label>
            </div>
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Introduce Product</label>
                <textarea name="" id="" v-model="productUpdateRef.intro" cols="30" rows="5" placeholder="Enter introduce product" class="border rounded px-[10px] py-[5px] text-[14px] outline-none"></textarea>
            </div>
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Description</label>
                <textarea  name="" id="" v-model="productUpdateRef.description" cols="30" rows="5" placeholder="Enter description product" class="border rounded px-[10px] py-[5px] text-[14px] outline-none"></textarea>
            </div>
            <button :type="Submit" class="bg-black font-medium text-[#fff] px-[10px] py-[5px] text-[15px]">Submit</button>
        </form>
    </div>
</template>
<script>
import { useProductStore } from '@/stores/productStore';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, watchEffect, computed } from 'vue'
import {CloudUploadOutlined} from "@ant-design/icons-vue"
export default {
    name: "UpdateProductPage",
    components: {
        CloudUploadOutlined
    },
    setup() {
        const productStore = useProductStore()
        const {params} = useRoute()
        const router = useRouter()
        const id = params.id
        const selectedFile = ref(null)

        const productUpdateRef = ref({
        name: '',
        price: '',
        thumbnail: '',
        intro: '',
        description: '',
    })
        const handleGetProductById = async (id) => {
            await productStore.actGetProductById(id)
        }

        onMounted(() => {
            handleGetProductById(id)
        })

        watchEffect(() => {
            const product = productStore.product;
            if (product) {
                productUpdateRef.value.name = product.name;
                productUpdateRef.value.price = product.price;
                productUpdateRef.value.thumbnail = product.thumbnail;
                productUpdateRef.value.intro = product.intro;
                productUpdateRef.value.description = product.description;
            }
        });

        const handleFileChange = (event) => {
            selectedFile.value = event.target.files[0];
            if(selectedFile.value) {
                const reader = new FileReader();
                reader.readAsDataURL(selectedFile.value);
                reader.onload = () => {
                    try {
                        productUpdateRef.value.thumbnail = reader.result
                        console.log(reader.result);
                    } catch (error) {
                        console.log("error", error);
                    }
                }
            }
        }

        const handleUpdate = async() => {
            const choice = confirm("Mời bạn xác nhận!");
            if (choice == true) {
                await productStore.actUpdateProduct(id, productUpdateRef.value)
                router.push("/admin/product")
            }
        }

        const nameImage = computed(() => {
            return selectedFile?.value?.name
        })
        return {    
            productUpdateRef,
            handleUpdate,
            handleFileChange,
            nameImage
        }
    }
}
</script>
<style lang="">
    
</style>