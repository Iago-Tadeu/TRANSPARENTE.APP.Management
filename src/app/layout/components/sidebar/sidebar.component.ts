import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(){}

}


// import { Component, HostListener, OnInit } from '@angular/core';
// import { UserModel } from '../../../core/models/user-model';
// import { ActivatedRoute } from '@angular/router';
// import { AuthenticationService } from '../../../core/services/authentication.service';
// import { Observable } from 'rxjs';
// import { ThemeOptions } from '../../../theme-options';

// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrl: './sidebar.component.scss'
// })
// export class SidebarComponent implements OnInit {
//   public extraParameter: any;
//   currentUser: UserModel;
//   constructor(public globals: ThemeOptions, private activatedRoute: ActivatedRoute, private authService: AuthenticationService, ) {
//     this.authService.currentUser.subscribe(x => this.currentUser = x);

//   }


//   @select('config') public config$: Observable<any>;

//   private newInnerWidth: number;
//   private innerWidth: number;
//   activeId = 'dashboardsMenu';

//   toggleSidebar() {
//     this.globals.toggleSidebar = !this.globals.toggleSidebar;
//   }

//   sidebarHover() {
//     this.globals.sidebarHover = !this.globals.sidebarHover;
//   }

//   ngOnInit() {
//     setTimeout(() => {
//       this.innerWidth = window.innerWidth;
//       if (this.innerWidth < 1200) {
//         this.globals.toggleSidebar = true;
//       }
//     });

//     this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;

//   }

//   @HostListener('window:resize', ['$event'])
//   onResize(event) {
//     this.newInnerWidth = event.target.innerWidth;

//     if (this.newInnerWidth < 1200) {
//       this.globals.toggleSidebar = true;
//     } else {
//       this.globals.toggleSidebar = false;
//     }

//   }
// }
