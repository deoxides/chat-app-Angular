import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { JoinComponent } from './pages/join/join.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'join',
  },
  {
    path: 'join',
    component: JoinComponent,
    pathMatch: 'full',
  },
  {
    path: 'room/:id',
    component: RoomsComponent,
  },
  {
    path: 'settings',
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
