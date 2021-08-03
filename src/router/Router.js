import {createRouter, createWebHistory} from 'vue-router';
import About from '../pages/About';
import Home from '../pages/Home';
import Login from "../pages/Login";
import Signup from "../pages/Signup"
import Form from "../pages/Form";
import Changepass from "../pages/change-password"


const routes=[
    {
        path:'/',
        name:'Login',
        component:Login
    },
    {
        path:'/home',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/form',
        name:'Form',
        component:Form
    },
    {
        path:'/signup',
        name:'Signup',
        component:Signup
    },
    {
        path:'/changepassword',
        name:'Changepass',
        component:Changepass
    },
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;