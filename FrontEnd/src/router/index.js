import {createWebHistory, createRouter} from "vue-router"
import Home from "../views/Home.vue"
import Add from "../views/admin/AddPhoto.vue"
import Stored from "../views/admin/StoredPictures.vue"
import Edit from "../views/admin/EditPhoto.vue"

const routes = [
    {
        path:"/",
        name: "home",
        component: Home,
    },
    
    {
        path:"/admin/photos/add",
        name: "Add",
        component: Add,
    },
    
    {
        path: "/admin/stored/pictures",
        name: "Stored",
        component:Stored,
    },

    {
        path: "/admin/picture/:id/edit",
        name: "Edit",
        component: Edit,
    }
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

