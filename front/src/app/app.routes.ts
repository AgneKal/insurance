import { Routes } from '@angular/router';
import { AddOwnerComponent } from './components/owners/add-owner/add-owner.component';
import { UpdateOwnerComponent } from './components/owners/update-owner/update-owner.component';
import { OwnersListComponent } from './components/owners/owners-list/owners-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { viewGuard } from './guards/view.guard';
import { editGuard } from './guards/edit.guard';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { adminGuard } from './guards/admin.guard';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';

export const routes: Routes = [
    {path: 'owners/list', component: OwnersListComponent, canActivate: [viewGuard]},
    {path: 'owners/add', component: AddOwnerComponent, canActivate: [editGuard]},
    {path: 'owners/:id', component: UpdateOwnerComponent, canActivate: [editGuard]},

    {path:"users/list", component: ListUsersComponent, canActivate:[adminGuard]},
    {path:"users/:id", component: UpdateUserComponent, canActivate:[adminGuard]},

    {path: "auth/signin", component: SigninComponent},
    {path: "auth/login", component: LoginComponent},

    {path: '', component: HomePageComponent},
];
