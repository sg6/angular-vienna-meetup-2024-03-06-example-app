import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = { role: 'Visitor' };
  user$: BehaviorSubject<User> = new BehaviorSubject(this.user);

  constructor() { }

  setRole(role: 'Visitor' | 'User' | 'Admin') {
    this.user.role = role;
    this.user$.next(this.user);
  }

  isLoggedIn(): boolean {
    return this.user.role === 'User' || this.user.role === 'Admin';
  }
}
