import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css',
})
export class FormListComponent {
  userService = inject(UserService);
  users: User[] = [];

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }

  delete(userId: string) {
    if (window.confirm('Are you sure you want to delete this user?')) {
      this.userService
        .getUserById(userId)
        .subscribe((user) => this.userService.deleteUser(user));
    }
  }

  constructor(private router: Router) {}

  contact(userId: string) {
    this.router.navigate(['/info', userId]);
  }
}
