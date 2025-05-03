import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.service';
import { user } from '@angular/fire/auth';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css'
})
export class FormListComponent {

  userService = inject(UserService);
  users: User[] = [];

  ngOnInit()
  {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  delete(userId: string)
  {
    this.userService.getUserById(userId).subscribe(user => this.userService.deleteUser(user));
  }

}
