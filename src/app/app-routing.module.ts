import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { ChatGuard } from './chat/guards/chat.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {
    path:'rooms',
    loadChildren:() => import('./chat/chat.module').then(m => m.ChatModule),
    canLoad:[ChatGuard]
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
