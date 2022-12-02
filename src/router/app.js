import {createRouter, createWebHistory} from "vue-router";
import CompletedTasks from "@/views/CompletedTasks.vue";


const routes = [
    {
        path: '/completed',
        name: 'CompletedTasks',
        Component: CompletedTasks
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router