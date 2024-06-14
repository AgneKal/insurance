import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnersService } from '../../../services/owners.service';
import { ErrorComponent } from '../../helper/error/error.component';

@Component({
  selector: 'app-update-owner',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorComponent, ReactiveFormsModule],
  templateUrl: './update-owner.component.html',
  styleUrl: './update-owner.component.css'
})
export class UpdateOwnerComponent {
  public updateOwnerForm: FormGroup;

  public id?: number = 0;
  public name: string = '';
  public surname: string = '';
  public phone: string = '';
  public email: string = '';
  public address: string = '';

  public isError = false;
  public errorText = '';
  
  constructor(private route: ActivatedRoute, private router: Router, private ownersService: OwnersService){
    this.updateOwnerForm = new FormGroup({
      'name': new FormControl(null),
      'surname': new FormControl(null),
      'phone': new FormControl(null),
      'email': new FormControl(null),
      'address': new FormControl(null)
    })

    this.ownersService.getOwner(this.route.snapshot.params['id']).subscribe({
      next:(owner) => {
        this.name = owner.name;
        this.surname = owner.surname;
        this.phone = owner.phone;
        this.email = owner.email;
        this.address = owner.address;
        this.id = owner.id;
      },
      error: (error) => {
        this.isError = true;
        this.errorText = error.error.text;
      }
    });

    this.updateOwnerForm = new FormGroup({
      'name': new FormControl(null),
      'surname': new FormControl(null),
      'phone': new FormControl(null),
      'email': new FormControl(null),
      'address': new FormControl(null)
    })
  }

  public ownerSubmit() {
    this.ownersService.updateOwner({id:this.id, ...this.updateOwnerForm.value}).subscribe({
      next:(data) => {
        this.router.navigate(['owners', 'list']);
      },
      error: (error) => {
        this.isError = true;
        this.errorText = error.error.text;
      }
    });
  }

}
