import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmDetailGuard implements CanActivate {
  
  constructor(private router:Router)
  {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +next.url[1].path;
      if (isNaN(id) || id < 1 ){
        alert("Invalid Algorithm Id");
        this.router.navigate(['/alogorithms']);
        return false;
      }

    return true;
  }
  
}
