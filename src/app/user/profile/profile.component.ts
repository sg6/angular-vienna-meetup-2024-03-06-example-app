import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  form!: FormGroup;
  saved = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      'username': [''],
    })
  }

  changeRole(role: 'Visitor' | 'User' | 'Admin') {
    this.userService.setRole(role);
  }

}
