import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './user/user.service';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Angular Vienna 2024';
  user?: User;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
      this.user = this.userService.user;

      this.userService.user$.subscribe(user => this.user = user);
  }
}
