import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  
  const authServ = inject(AuthService);
  const router = inject(Router);

  const user = authServ.getUserOn();

    if(user == undefined) {
      //router.navigate(['/main']);
      return true;
    }else{
      //router.navigate(['/main']);
      return false;
    }
    
};
