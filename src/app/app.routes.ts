import { Routes } from '@angular/router';

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
        path: "*",
        redirectTo: "",
        pathMatch: "full"
    }
];
