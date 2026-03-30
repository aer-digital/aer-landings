import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", name: 'Home', component: () => import("../views/index/Home.vue") },
    { path: "/jogatina", name: 'Jogatina', component: () => import("../views/jogatina/Jogatina.vue") },
    { path: "/jogatina/privacy", name: 'Privacy', component: () => import("../views/jogatina/privacy/Privacy.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;