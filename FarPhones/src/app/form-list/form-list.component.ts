import { Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.service';
import { RouterLink, ActivatedRoute } from '@angular/router';
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
  route = inject(ActivatedRoute);
  
  input: string = '';
  user!: User;
  selectedUser!: User;
  editUserId: string | null = null;

  filteredItems = computed(() => this.users.filter(user => user.fullName.toLowerCase().includes(this.userService.searchTerm().toLowerCase())));

  delete(userId: string) {
    if (window.confirm('Are you sure you want to delete this user?')) {
      this.userService
        .getUserById(userId)
        .subscribe((user) => this.userService.deleteUser(user));
    }
  }

  sendSearch()
  {
    this.userService.searchTerm.set(this.input);
    console.log(this.filteredItems.toString);
  }
  constructor(private router: Router) {}

  contact(userId: string) {
    this.editUserId = userId;
    this.userService.getUserById(this.editUserId).subscribe(user => {  this.user = user});
    
    this.user.clicks = this.user.clicks + 1;
    this.updateUser();
    this.router.navigate(['/info', userId]);
  }

  ngOnInit()
  {
    this.userService.getUsers().subscribe(data => this.users = data);
    const userId = this.route.snapshot.paramMap.get('id') ?? '';
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
    this.resetForm();
  }
}
