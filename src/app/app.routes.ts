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
        path: "*",
        redirectTo: "",
        pathMatch: "full"
    }
];
