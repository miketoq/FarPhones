import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.service';

@Component({
  selector: 'app-form-add',
  imports: [],
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.css'
})
export class FormAddComponent implements OnInit{

  userService = inject(UserService);

  user: User = {id: '', fullName: '',  email: '', phoneNumber: '', role: '', address: '', clicks: 0, description: ''}

  users: User[] = [];

  ngOnInit()
  {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  addUser()
  {
    this.userService.addUser(this.user);
    this.resetForm();
  }

  resetForm()
  {
    this.user = 
    {
      id: '', fullName: '', email: '', phoneNumber: '', role: '', address: '', clicks: 0, description: ''
    }
  }
}
