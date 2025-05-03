import { Component, inject, input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-edit',
  imports: [FormsModule , RouterLink],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css'
})
export class FormEditComponent {
  userService = inject(UserService);
  users: User[] = [];
  route = inject(ActivatedRoute);

  user!: User
  selectedUser!: User;
  editUserId: string | null = null;


  ngOnInit()
  {
    this.userService.getUsers().subscribe(data => this.users = data);
    const userId = this.route.snapshot.paramMap.get('id') ?? '';
    this.editUserId = userId;
    this.userService.getUserById(this.editUserId).subscribe(user => {  this.user = user; });
    // this.userService.getUsers().subscribe(data => {this.users = data; this.selectUser = this.users.find(user => user)})
  }
  
  resetForm()
  {
    this.user = 
    {
      id: '', fullName: '', email: '', phoneNumber: '', role: '', address: '', clicks: 0, description: ''
    }
    this.editUserId = null;
  }

  setEditUser(editUser: User)
  {
    this.user = { ... editUser};
    this.editUserId = editUser.id;
  }

  deleteUser(delUser: User)
  {
    this.userService.deleteUser(delUser);
  }

  updateUser()
  {
    this.userService.updateUser(this.user);
    this.resetForm;
  }
  
  delete(userId: string)
  {
    this.userService.getUserById(userId).subscribe(user => this.userService.deleteUser(user));
  }

  // selectUser(user: User)
  // {
  //   this.selectedUser = user;
  //   console.log("Selected User:", this.selectedUser);
  // }
}
