import { createRouter, createWebHistory } from "vue-router";

import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
import HomePage from "./pages/Client/HomePage";
import ProductsPage from "./pages/Client/ProductsPage";
import LoginPage from "./pages/Client/LoginPage";
import RegisterPage from "./pages/Client/RegisterPage";
import ProductDetail from "./pages/Client/ProductDetail";
import BlogPage from "./pages/Client/BlogPage";
import AboutPage from "./pages/Client/AboutPage";
import ContactPage from "./pages/Client/ContactPage";
import NotFound from "./pages/Client/NotFound";
import DashboardPage from "./pages/Admin/DashboardPage";
import AdminConfigPage from "./pages/Admin/AdminConfigPage";
import AdminOrderPage from "./pages/Admin/AdminOrderPage";
import AdminProductPage from "./pages/Admin/AdminProductPage";
import AdminUserPage from "./pages/Admin/AdminUserPage";
import UpdateProductPage from "./pages/Admin/UpdateProductPage";
import AdminBlogPage from "./pages/Admin/AdminBlogPage";
import ResultSearchPage from "./pages/Client/ResultSearchPage";
import AdminOrderDetail from "./pages/Admin/AdminOrderDetail";
import ProfilePage from "./pages/Client/ProfilePage";
const routes = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      { path: "", component: HomePage },
      { path: "product", component: ProductsPage },
      { path: "product/:id", component: ProductDetail },
      { path: "blog", component: BlogPage },
      { path: "about", component: AboutPage },
      { path: "contact", component: ContactPage },
      { path: "search", component: ResultSearchPage },
      { path: "profile", component: ProfilePage },
    ],
  },
  {
    path: "/login-layout",
    component: AuthLayout,
    children: [
      { path: "", component: LoginPage },
      { path: "register", component: RegisterPage },
    ],
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "dashboard", component: DashboardPage },
      { path: "order", component: AdminOrderPage },
      { path: "order/:id", component: AdminOrderDetail },
      { path: "product", component: AdminProductPage },
      { path: "product/:id", component: UpdateProductPage },
      { path: "user", component: AdminUserPage },
      { path: "blog", component: AdminBlogPage },
      { path: "config", component: AdminConfigPage },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
