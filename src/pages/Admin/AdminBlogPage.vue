<template lang="">
    <div class="flex gap-5">
        <table class="flex-1 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Silver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">
                        White
                    </td>
                    <td class="px-6 py-4">
                        Laptop PC
                    </td>
                    <td class="px-6 py-4">
                        $1999
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        Black
                    </td>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        $99
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="flex flex-col items-start gap-4 flex-1">
            <div class="flex flex-col gap-1 w-full">
                <label for="" class="text-[13px] font-medium">Title</label>
                <input type="number" placeholder="Enter blog title" class="border px-[10px] py-[5px] text-[14px] outline-none">
            </div>
            <div class="flex flex-col gap-1 w-full">
                <label for="" class="text-[13px] font-medium">Image</label>
                <input type="number" placeholder="Enter blog title" class="border px-[10px] py-[5px] text-[14px] outline-none">
            </div>
            <div class="flex flex-col gap-1 w-full">
                <label for="" class="text-[13px] font-medium">Describe</label>
                <input type="number" placeholder="Enter blog describe" class="border px-[10px] py-[5px] text-[14px] outline-none">
            </div>
            <div class="flex flex-col gap-1 w-full">
                <label for="" class="text-[13px] font-medium">Content</label>
                <div class="h-[300px]">
                    <QuillEditor />
                </div>
            </div>
            <button class="bg-black font-medium text-[#fff] px-[10px] py-[5px] text-[15px] mt-[40px]">Upload</button>
        </div>
    </div>
</template>
<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
    name: "AdminBlogPage",
    components: {
        QuillEditor
    }
}
</script>
<style lang="">
    
</style>