import { Routes } from '@angular/router';
import { protectorGuard } from './core/guards/protector.guard';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./modules/home/home/home.component").then(m => m.HomeComponent)
    },
    {
        path: "login",
        loadComponent: () => import("./modules/login/login/login.component").then(m => m.LoginComponent)
    },
    {
        path: "admin",
            loadComponent: () => import("./modules/admin-products/admin-products/admin-products.component").then(m => m.AdminProductsComponent),
        canActivate: [protectorGuard]
    },
    {
        path: "sell-with-us",
            loadComponent: () => import("./modules/sellWithUs/sell-with-us/sell-with-us.component").then(m => m.SellWithUsComponent),
    },
    {
        path: "orders",
            loadComponent: () => import("./modules/orders/orders/orders.component").then(m => m.OrdersComponent),
    },
    {
        path: "my-orders",
            loadComponent: () => import("./modules/myOrders/my-orders/my-orders.component").then(m => m.MyOrdersComponent),
    },
    {
        path: "checkout",
        loadComponent: () => import("./modules/checkout/checkout/checkout.component").then(m => m.CheckoutComponent),
    },
    {
        path: "favorites",
        loadComponent: () => import("./modules/myFavorites/my-favorites/my-favorites.component").then(m => m.MyFavoritesComponent),
    },
    {
        path: "product/:id",
        loadComponent: () => import("./modules/productDetails/product-detail/product-detail.component").then(m => m.ProductDetailComponent),
    },
    {
        path: "*",
        redirectTo: "",
        pathMatch: "full"
    }
];
