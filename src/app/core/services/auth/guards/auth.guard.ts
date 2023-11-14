import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthService);
  const router = inject(Router);

  const user = authServ.getUserOn();

    if(user == undefined) {
      router.navigate(['/auth/login']);
      return false;
    }else{
      return true;
    }
};
