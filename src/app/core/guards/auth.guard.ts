import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Injectable({ providedIn: "root" })
export class AuthGuard {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const currentUser = this.authService.currentUserValue;
    // if (currentUser) {
    //   if (
    //     route.data["roles"] &&
    //     route.data["roles"].indexOf(currentUser) === -1
    //   ) {
    //     this.authService.logout();
    //     return false;
    //   }
    //   return true;
    // }
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}