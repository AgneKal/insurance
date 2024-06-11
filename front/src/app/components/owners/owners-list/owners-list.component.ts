import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Owner } from '../../../models/owner';
import { OwnersService } from '../../../services/owners.service';

@Component({
  selector: 'app-owners-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './owners-list.component.html',
  styleUrl: './owners-list.component.css'
})
export class OwnersListComponent {
  public owners: Owner[] = [];

    constructor(private ownersService: OwnersService){
    ownersService.getOwners().subscribe((data) => {
      this.owners = data;
    });
  }

}
