import { CanDeactivateFn } from '@angular/router';
import { ProfileComponent } from '../user/profile/profile.component';
import { inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export const canDeactivateGuard: CanDeactivateFn<ProfileComponent> = (
  component: ProfileComponent,
) => {
  const modalService = inject(NgbModal);

  if (!component.form.pristine && !component.saved) {
    modalService.open(` You have unsaved changes `);
    return false;
  }
  return true;
};
