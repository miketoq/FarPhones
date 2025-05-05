import { Routes } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormAddComponent } from './form-add/form-add.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { FormInfoComponent } from './form-info/form-info.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'edit/:id',
    component: FormEditComponent,
    title: 'Edit Contact',
  },
  {
    path: 'directory',
    component: FormListComponent,
    title: 'Form List',
  },
  {
    path: 'add',
    component: FormAddComponent,
    title: 'Form Add',
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
    title: 'Contact Us',
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    title: 'About Us',
  },
  {
    path: 'info/:id',
    component: FormInfoComponent,
    title: 'Contact Info',
  },
];
