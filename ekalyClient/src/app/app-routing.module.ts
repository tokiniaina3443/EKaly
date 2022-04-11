import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CommandAdminComponent } from './command-admin/command-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'login',
        component: LoginAdminComponent,
      },
      {
        path: 'menu',
        component: HomeAdminComponent,
        children: [
          {
            path: '',
            component: CommandAdminComponent,
          },
          {
            path: 'command',
            component: CommandAdminComponent,
          },
        ],
      },
    ],
  },
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
