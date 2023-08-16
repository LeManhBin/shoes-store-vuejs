<template lang="">
    <div class="flex gap-5">
        <div class=" flex flex-col justify-between gap-5 overflow-x-auto sm:rounded-lg w-[60%] ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center">
                            User Name
                        </th>
                        <th scope="col" class="px-6 py-3 text-center" >
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3 text-center" >
                            Role
                        </th>
                        <th scope="col" class="px-6 py-3 text-center" >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="user in usersData" :key="user.id">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            {{user?.name}}
                        </th>
                        <td class="px-6 py-4 text-center">
                            {{user?.email}}
                        </td>
                        <td class="px-6 py-4 text-center">
                            <span v-if="user?.isAdmin === false" class="bg-[#75C2F6] px-[10px] py-[5px] rounded-md font-semibold text-[#fff]">Client</span>
                            <span v-if="user?.isAdmin" class="bg-[#F4D160] px-[10px] py-[5px] rounded-md font-semibold text-[#fff]">Admin</span>
                        </td>
                        <td class="px-6 py-4 text-center">
                            <button href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline mr-2" @click="handleDelete(user?.id)">Delete</button>
                            <button href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Edit</button>
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
                <label for="" class="text-[13px] font-medium">Name</label>
                <input v-model="userRef.name" type="text" placeholder="Enter name" class="border rounded px-[10px] py-[5px] text-[14px] outline-none">
            </div>
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Email</label>
                <input v-model="userRef.email" type="text" placeholder="Enter email" class="border rounded px-[10px] py-[5px] text-[14px] outline-none">
            </div>
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Password</label>
                <input v-model="userRef.password" type="password" placeholder="Enter password" class="border rounded px-[10px] py-[5px] text-[14px] outline-none">
            </div>
            <div class="flex flex-col gap-1">
                <label for="" class="text-[13px] font-medium">Role</label>
                <div class="flex items-center gap-5">
                    <div class="flex items-center gap-2">
                        <input type="radio" :value="false" v-model="userRef.isAdmin" id="client" name="role">
                        <label for="client" class="text-[13px] font-medium">Client</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <input type="radio" :value="true" v-model="userRef.isAdmin" id="admin" name="role">
                        <label for="admin" class="text-[13px] font-medium">Admin</label>
                    </div>
                </div>
            </div>
            <button :type="Submit" class="bg-black font-medium text-[#fff] px-[10px] py-[5px] text-[15px]">Submit</button>
        </form>
    </div>
</template>
<script>
    // import { quillEditor } from 'vue-quill-editor'

    import { useUserStore } from '@/stores/authStore'
    import {ref, onMounted, computed} from 'vue'
import { useToast } from 'vue-toastification'
    // import { useRouter } from 'vue-router'
    export default {
        name: "AdminUserPage",
        components: {
            // quillEditor,
        },
        setup() {
            const toast = useToast()
            const userStore = useUserStore()
            const userRef = ref({
                name: "",
                email: "",
                password: "",
                isAdmin: false,
            })

            const handleSubmit = async() => {
                await userStore.fetchRegisterUser(userRef.value)
            }

            const handleDelete = async (id) => {
                const choice = confirm("Mời bạn xác nhận!");
                if (choice == true) {
                    if(id == userStore.myUser.id) {
                        return toast.warning("You are using this account")
                    }else {
                        await userStore.actDeleteUser(id)
                    }
                }
            }

            const handleGetAllUser = async() => {
                await userStore.actGetAllUser()
            }

            onMounted(() => {
              handleGetAllUser()  
            })

            const usersData = computed(() => {
                const startIndex = (userStore.currentPage - 1) * userStore.itemsPerPage;
                const endIndex = startIndex + userStore.itemsPerPage;
                return userStore.users.slice(startIndex, endIndex);
            });

            const pageArray = computed(() => {
                const arr = [];
                for (let i = 1; i <= userStore.totalPages; i++) {
                    arr.push(i);
                }
                return arr;
            });

            const goToPage = (pageNumber) => {
                userStore.currentPage = pageNumber;
            };

            const currentPage = computed(() => {
                return userStore.currentPage
            })

            return {
                userRef,
                handleSubmit,
                usersData,
                pageArray,
                goToPage,
                currentPage,
                handleDelete
            }
        }
    }
</script>
<style lang="">
    
</style>