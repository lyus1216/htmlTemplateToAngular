import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ){
    if (localStorage.getItem('currentUser')){
      // logined in
      return true;
    };
    this.router.navigate(['/Login'],{queryParams: {returnUrl: state.url}});

  }
}
