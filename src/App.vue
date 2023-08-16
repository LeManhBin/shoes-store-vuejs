<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import router from './routes';
import { useUserStore } from './stores/authStore';
import { onMounted } from 'vue'; 
// import router from './routes';
export default {
  name: 'App',
  components: {

  },
  setup() {
    const userStore = useUserStore()
    const accessToken = localStorage.getItem("token") || null
    
    onMounted( async() => {
      if(accessToken) {
        await userStore.fetchReLogin(accessToken)
      }
    })


    // router.beforeEach((to, from, next) => {
    //   if (to.path === '/admin') {
    //     console.log("==", role);
    //     if (userStore.myUser.isAdmin === true) {
    //       console.log("admin");
    //       next('/admin');
    //     } else {
    //       next('/');
    //       console.log("user");
    //     }
    //   } else {
    //     next();
    //   }
    // })
  }
}
</script>

<style>

</style>
