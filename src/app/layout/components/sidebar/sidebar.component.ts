import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private router: Router){
    // , public menuService: MenuService) {

  }


  selectMenu(menu: number) {
    switch (menu) {
      case 1:
        this.router.navigate(['/home']);
        break;

      case 2:
        this.router.navigate(['/form']);
        break;

      case 3:
        this.router.navigate(['/register']);
        break;

      default:
        break;
    }

    // this.menuService.menuSelected = menu;

  }

}