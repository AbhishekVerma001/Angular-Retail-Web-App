import { LoginService } from './../services/login.service';

import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
 
} from '@angular/router';
import { map } from 'rxjs';



export const authGuard = (next: ActivatedRouteSnapshot) => {
//   const service = inject(LoginService);
//  // const router=inject(Router);
//  console.log(service
//   .isUserLoggedIn()
//   .pipe(
//     map((isLoggedIn) =>
//       isLoggedIn ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
//     )
//   ));
//   return service
//     .isUserLoggedIn()
//     .pipe(
//       map((isLoggedIn) =>
//         isLoggedIn ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
//       )
//     );

};