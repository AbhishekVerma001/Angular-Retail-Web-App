import { TOKEN } from './../services/login.service';
import { HttpHeaders } from '@angular/common/http';

   //export var isLoggedIn:boolean=false;
   export const headers=new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem(TOKEN)}`
    });
    export const requestOptions={headers:headers};
