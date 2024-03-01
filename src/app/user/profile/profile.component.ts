import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(
    private userService: UserService,
  ) {}

  changeRole(role: 'Visitor' | 'User' | 'Admin') {
    this.userService.setRole(role);
  }

}
