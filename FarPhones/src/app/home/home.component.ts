import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../user.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userService = inject(UserService)
  users: User[] = [];

  topThreeUsers: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.topThreeUsers = users
        .sort((a, b) => (b.clicks || 0) - (a.clicks || 0))
        .slice(0, 3);
    });
  }
 
   constructor(private router: Router) {}
 
   contact(userId: string) {
     this.router.navigate(['/info', userId]);
   }
}
