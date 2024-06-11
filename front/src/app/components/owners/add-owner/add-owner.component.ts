import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OwnersService } from '../../../services/owners.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-owner',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-owner.component.html',
  styleUrl: './add-owner.component.css'
})
export class AddOwnerComponent {

  constructor(private ownersService: OwnersService, private router:Router){ }

    public ownerSubmit(form: NgForm) {
    this.ownersService.addOwner(form.form.value).subscribe((data) => {})
    this.router.navigate(['owners', 'list']);
  }

}
