import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormAddComponent } from './form-add/form-add.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormListComponent } from './form-list/form-list.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent,
        title: "Home"
    },

    {
        path: "directory",
        component: FormListComponent,
        title: "Directory List"
    },

    // {
    //     path: "forms",
    //     component: 
    // },

    {
        path: "about",
        component: AboutUsComponent,
        title: "About Us"
    },

    {
        path: "add",
        component: FormAddComponent,
        title: "Add Form"
    },

    {
        path: "contact/:id",
        component: FormEditComponent,
        title: "Edit Form"
    }
];
