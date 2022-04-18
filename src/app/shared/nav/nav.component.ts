import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent{
  scrolled:boolean = false;
  active:boolean = false;

  showLogoutButton:boolean = false;

  constructor(private auth:AuthService){
    this.auth.isLoggedIn().subscribe((state) => (state)? this.showLogoutButton = true : this.showLogoutButton = false)
  }

  @HostListener("window:scroll")
  onScroll(){
    this.scrolled = window.scrollY > 0;
  }
  onActivate(){
    this.active = (!this.active) ?  true : false ;
  }

  logout(){
    this.showLogoutButton = false;
    this.auth.logout();
  }
}
