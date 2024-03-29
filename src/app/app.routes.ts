import { Routes } from '@angular/router';
import { ListComponent } from './product/list/list.component';
import { DetailComponent } from './product/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { ProfileComponent } from './user/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { productResolver } from './guards/product.resolver';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'product/list',
        component: ListComponent,
    },
    {
        path: 'product/detail',
        redirectTo: 'product/list',
        pathMatch: 'full'
    },
    {
        path: 'product/detail/:id',
        component: DetailComponent,
        canActivate: [authGuard],
        resolve: { product: productResolver },
    },
    {
        path: 'admin/dashboard',
        component: DashboardComponent,
    },
    {
        path: 'user/profile',
        component: ProfileComponent,
        canDeactivate: [canDeactivateGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    }
];
