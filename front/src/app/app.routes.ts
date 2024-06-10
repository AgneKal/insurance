import { Routes } from '@angular/router';
import { AddOwnerComponent } from './components/owners/add-owner/add-owner.component';
import { UpdateOwnerComponent } from './components/owners/update-owner/update-owner.component';
import { OwnersListComponent } from './components/owners/owners-list/owners-list.component';

export const routes: Routes = [
    {path: 'owners/list', component: OwnersListComponent},
    {path: 'owners/add', component: AddOwnerComponent},
    {path: 'owners/update', component: UpdateOwnerComponent},
];
