import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './user/user.service';
import { User } from './interfaces/user.interface';
import { LoadingService } from './shared/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Angular Vienna 2024';
  user?: User;
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private loadingService: LoadingService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
      this.user = this.userService.user;
      this.changeDetectorRef.detectChanges();
      this.userService.user$.subscribe(user => this.user = user);
  }

  ngAfterViewInit(): void {
    this.loadingService.loading$.subscribe(loading => {
      this.isLoading = loading; 
      this.changeDetectorRef.detectChanges();
    });
  }
}
