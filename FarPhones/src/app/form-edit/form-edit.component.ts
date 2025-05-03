import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.service';

@Component({
  selector: 'app-form-edit',
  imports: [],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css'
})
export class FormEditComponent {
  userService = inject(UserService);
  users: User[] = [];

  ngOnInit()
  {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  editUserId: string | null = null;

  // resetForm()
  // {
  //   this.user/*find the user we're wanting to edit*/ = 
  //   {
  //     id: '', fullName: '', email: '', phoneNumber: '', role: '', address: '', clicks: 0, description: ''
  //   }
  //   this.editUserId = null;
  // }

  // setEditUser(editUser: User)
  // {
  //   this.user = { ... editUser};
  //   this.editUserId = editUser.id;
  // }
  // deleteUser(delUser: User)
  // {
  //   this.userService.updateUser(this.user)
  //   {
  //     this.resetForm();
  //   }
  // }
}
