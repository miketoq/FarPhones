import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormAddComponent } from './form-add/form-add.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    HomeComponent,
    FormListComponent,
    FormAddComponent,
    FormEditComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FarPhones';
  isHomeRoute = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomeRoute =
          event.urlAfterRedirects === '/' ||
          event.urlAfterRedirects === '/home';
      });
  }
}
