import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.service';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css'],
})
export class FormInfoComponent {
  userService = inject(UserService);
  user: User | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService
        .getUserById(userId)
        .subscribe((data) => (this.user = data));
    }
  }

  close() {
    this.router.navigate(['/directory']); // Redirect back to the main directory
  }
}
