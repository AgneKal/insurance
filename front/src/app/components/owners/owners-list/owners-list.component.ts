import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Owner } from '../../../models/owner';
import { OwnersService } from '../../../services/owners.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-owners-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './owners-list.component.html',
  styleUrl: './owners-list.component.css'
})
export class OwnersListComponent {
  public owners: Owner[] = [];

  private loadOwners(){
    this.ownersService.getOwners().subscribe((data) => {
      this.owners = data;
    });
  }

  constructor(private ownersService: OwnersService, public authService: AuthService){
    this.loadOwners();
  }

  public deleteOwner(id: number){
    this.ownersService.deleteOwner(id).subscribe((data) => {
      this.loadOwners();
    });
  }

}
