import LoginPage from "@/components/LoginPage.vue"
import Dashboard from "@/components/Dashboard.vue";
import { createMemoryHistory, createRouter } from "vue-router";


const routes = [
    {path: '/login', component: LoginPage},
    {path: '/dashboard', name: "Dashboard", component: Dashboard}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;