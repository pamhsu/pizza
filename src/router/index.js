import{
    createRouter,
    createWebHistory
}from "vue-router"

//import HomeView from "../views/HomeView.vue"
//import ProductsView from "../views/ProductsView.vue"
//import AboutView from "../views/AboutView.vue"
//import ProductDetailView from "../views/ProductDetailView.vue"
 

const routes=[
    {
        path:"/",
        name:"home",
        component:()=>import("../views/HomeView.vue")
    },
    {
        path:"/products",
        name:"products",
        component:()=>import("../views/ProductsView.vue")
    },
    {
        path:"/about",
        name:"about",
        component:()=>import("../views/AboutView.vue")
    },
    {
        path:"/products/:id",
        name:"productDetail",
        component:()=>import("../views/ProductDetailView.vue")
    },  
    {
        path:"/products/category/:category",
        name:"category",
        component:()=>import("../views/CategoryProductView.vue")
    },  
    {
        path:"/cart",
        name:"cart",
        component:()=>import("../views/cartView.vue")
    },
    {
        path:"/login",
        name:"login",
        component:()=>import("../views/LoginView.vue")
    },
    {
        path:"/register",
        name:"register",
        component:()=>import("../views/RegisterView.vue")
    },          
]

const router=createRouter(
    {
        history:createWebHistory(),
        routes
    }
)

export default router