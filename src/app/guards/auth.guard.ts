import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user.service";

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(UserService);
  const router = inject(Router);

  if(!auth.isAuthenticated) {
    router.navigateByUrl('/login')
    return false
  }
  return true

};
