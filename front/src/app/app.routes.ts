import { Routes } from '@angular/router';
import { AddOwnerComponent } from './components/owners/add-owner/add-owner.component';
import { UpdateOwnerComponent } from './components/owners/update-owner/update-owner.component';
import { OwnersListComponent } from './components/owners/owners-list/owners-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
    {path: 'owners/list', component: OwnersListComponent},
    {path: 'owners/add', component: AddOwnerComponent},
    {path: 'owners/:id', component: UpdateOwnerComponent},

    {path: "auth/signin", component: SigninComponent},
    {path: "auth/login", component: LoginComponent},

    {path: '', component: HomePageComponent},
];
