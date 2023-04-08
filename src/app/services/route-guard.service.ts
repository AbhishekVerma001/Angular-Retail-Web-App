import { LoginService } from './login.service';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
  Router,
} from '@angular/router';
import { map } from 'rxjs';



// export const authGuard = (next: ActivatedRouteSnapshot) => {
//   const service = inject(LoginService);
//  // const router=inject(Router);
//   return service
//     .isUserLoggedIn()
//     .pipe(
//       map((isLoggedIn) =>
//         isLoggedIn ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
//       )
//     );

// };


//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


//     if (this.hardcodedAuthenticationService.isUserLoggedIn())
//       return true;


//     this.router.navigate(['login']);


//     return false;
//   }
// }
