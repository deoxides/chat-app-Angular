import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//routes
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ChatRoutingModule } from './chat/chat-routing.module';
import { HomeRoutingRoutingModule } from './home/home-routing-routing.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'auth',
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'rooms',
    loadChildren:() => import('./chat/chat.module').then(m => m.ChatModule)
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
