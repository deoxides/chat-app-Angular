import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent,
    pathMatch:'full',
    children:[
      {
        path:'contact',
        component:ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingRoutingModule { }
