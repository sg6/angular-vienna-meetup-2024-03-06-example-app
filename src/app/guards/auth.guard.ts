import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isLoggedIn()) {
    return true;
  }

  router.navigateByUrl('/user/profile');

  const modalService = inject(NgbModal);
  modalService.open(` You are not allowed to access this route. Please log in. `);
  return false;

  // Alternative:
  // return router.parseUrl('/user/profile');
};
