<template lang="">
    <div class="flex gap-5">
        <div class=" flex flex-col justify-between overflow-x-auto sm:rounded-lg w-[60%] ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3 text-center" >
                            Thumbnail
                        </th>
                        <th scope="col" class="px-6 py-3 text-center" >
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3 text-center" >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="product in allProduct" :key="product.id">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            {{product?.name}}
                        </th>
                        <td class="px-6 py-4 text-center">
                            <img :src="product?.thumbnail" alt="img" class="w-[120px] h-[80px] object-cover">
                        </td>
                        <td class="px-6 py-4 text-center">
                            ${{product?.price}}
                        </td>
                        <td class="px-6 py-4 text-center">
                            <button href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline mr-2" @click="handleDeleteProduct(product?.id)">Delete</button>
                            <button href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" @click="goUpdate(product?.id)">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination mx-auto flex items-center gap-3 flex-nowrap">
                <button class="w-[30px] h-[30px] border" :class="{'bg-black text-white': pageNumber === (currentPage ?? 1), 'text-black bg-white': pageNumber !== (currentPage ?? 1)}" v-for="pageNumber in pageArray" :key="pageNumber" @click="goToPage(pageNumber)">
                    {{ pageNumber }}
                </button>
            </div>
        </div>

        <form action="" class="flex flex-col gap-5  w-[35%]" @submit.prevent="handleSubmit">
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Name Product</label>
                <input v-model="productRef.name" type="text" placeholder="Enter name product" class="border rounded px-[10px] py-[5px] text-[14px] outline-none">
            </div>
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Price</label>
                <input v-model="productRef.price" type="number" placeholder="Enter price product" class="border rounded px-[10px] py-[5px] text-[14px] outline-none">
            </div>
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Thumbnail</label>
                <input type="file" id="input-image" ref="fileInput" @change="handleFileChange" class="hidden">
                <label for="input-image" class="flex justify-between border rounded px-[10px] py-[5px] text-[14px] outline-none">
                    <span>{{nameImage || 'image.jpg'}}</span>
                    <CloudUploadOutlined :style="{fontSize: '20px'}" />
                </label>
            </div>
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Introduce Product</label>
                <textarea v-model="productRef.intro" name="" id="" cols="30" rows="5" placeholder="Enter introduce product" class="border rounded px-[10px] py-[5px] text-[14px] outline-none"></textarea>
            </div>
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Description</label>
                <textarea v-model="productRef.description" name="" id="" cols="30" rows="5" placeholder="Enter description product" class="border rounded px-[10px] py-[5px] text-[14px] outline-none"></textarea>
                <!-- <quillEditor v-model="productRef.description" :options="editorOptions"></quillEditor> -->
            </div>
            <button :type="Submit" class="bg-black font-medium text-[#fff] px-[10px] py-[5px] text-[15px]">Submit</button>
        </form>
    </div>
</template>
<script>
// import { quillEditor } from 'vue-quill-editor'
import { useProductStore } from '@/stores/productStore'
import {ref, onMounted, computed} from 'vue'
import { useRouter } from 'vue-router'
import {CloudUploadOutlined} from "@ant-design/icons-vue"
export default {
    name: "AdminProductPage",
    components: {
        // quillEditor,
        CloudUploadOutlined
    },
    setup() {
        const productStore = useProductStore()
        const router = useRouter()
        const selectedFile = ref(null)
        const productRef = ref({
            name: "",
            price: "",
            thumbnail: "",
            intro:  "",
            description: ""
        })

        const handleFileChange = (event) => {
            selectedFile.value = event.target.files[0];
            if(selectedFile.value) {
                const reader = new FileReader();
                reader.readAsDataURL(selectedFile.value);
                reader.onload = () => {
                    try {
                        productRef.value = {...productRef.value, thumbnail: reader.result}
                    } catch (error) {
                        console.log("error", error);
                    }
                }
            }
        }


        const handleSubmit = async() => {
            await productStore.actCreateProduct(productRef.value)
            productRef.value = {
                name: "",
                price: "",
                thumbnail: "",
                intro:  "",
                description: ""
            }
        }


        const handleGetAllProduct = async() => {
            await productStore.actGetAllProducts()
        }

        const handleDeleteProduct = async (id) => {
            const choice = confirm("Mời bạn xác nhận!");
            if (choice == true) {
                await productStore.actDeleteProduct(id)
                console.log("click");
            }
        }

        const goUpdate = (id) => {
            router.push(`/admin/product/${id}`)
        }

        onMounted( async() => {
            await handleGetAllProduct()
        })

        const nameImage = computed(() => {
            return selectedFile?.value?.name
        })

        const allProduct = computed(() => {
            const startIndex = (productStore.currentPage - 1) * productStore.itemsPerPage;
            const endIndex = startIndex + productStore.itemsPerPage;
            return productStore.products.slice(startIndex, endIndex);
        });

        const pageArray = computed(() => {
            const arr = [];
            for (let i = 1; i <= productStore.totalPages; i++) {
                arr.push(i);
            }
            return arr;
        });

        const goToPage = (pageNumber) => {
            productStore.currentPage = pageNumber;
        };

        const currentPage = computed(() => {
            return productStore.currentPage
        })

        return {
            productRef,
            handleSubmit,
            allProduct,
            pageArray,
            goToPage,
            currentPage,
            handleDeleteProduct,
            goUpdate,
            handleFileChange,
            nameImage
        }
    }
}
</script>
<style lang="">
    
</style>