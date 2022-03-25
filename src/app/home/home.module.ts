//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Custom Modules
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingRoutingModule } from './home-routing-routing.module';
//Components
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { ToolsComponent } from './components/tools/tools.component';



@NgModule({
  declarations: [
    IndexComponent,
    ContactComponent,
    BannerComponent,
    ServicesComponent,
    ToolsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingRoutingModule
  ],
  exports:[
    IndexComponent
  ]
})
export class HomeModule { }
