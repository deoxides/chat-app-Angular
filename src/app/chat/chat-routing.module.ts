import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatGuard } from './guards/chat.guard';

import { ProfileComponent } from './pages/profile/profile.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { IndexComponent } from './pages/index/index.component';



const routes:Routes = [
  {
    path:'',
    canActivate:[ChatGuard],
    redirectTo:'join',
    children:[
      {
        path:'join',
        component: IndexComponent,
        pathMatch:'full',
      },
      {
        path:':id',
        component:RoomsComponent,
      },
    ]
  },

  {
    path:'settings',
    children:[
      {
        path:'profile',
        component:ProfileComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
