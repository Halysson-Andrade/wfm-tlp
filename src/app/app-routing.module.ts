import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginGuard } from './core/guard/login.guard';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './pages/user/user.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PermissionComponent } from './pages/permission/permission.component';
import { ChartsComponent } from './pages/charts/charts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'troca-de-senha',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'recuperar-senha',
    component: ForgotPasswordComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'permissions',
        component: PermissionComponent,
      },
      {
        path: 'profiles',
        component: ProfileComponent,
      },
      {
        path: 'menus',
        component: MenuComponent,
      },
      {
        path: 'users',
        component: UserComponent,
      },
      //Paginas criadas por Halysson
      {
        path: 'charts',
        component: ChartsComponent,
      },
      { path: '', redirectTo: 'permissions', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/permissions' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
