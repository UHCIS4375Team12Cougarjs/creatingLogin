import LoginPage from "@/components/LoginPage.vue"
import Dashboard from "@/components/Dashboard.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { useUserStore } from "@/store/userStore";


const routes = [
    {path: '/:catchall(.*)', redirect: '/login'},
    {path: '/login', name: "login", component: LoginPage},
    {path: '/dashboard', name: "dashboard", component: Dashboard}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

router.beforeEach(function(to, from, next) {
    const userStore = useUserStore()
    if (to.meta.requiresAuth && !userStore.isAuthenicated) {
        next({name: 'login'})
    } else {
        next()
    }
})

export default router;