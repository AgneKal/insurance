import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { OwnersService } from '../../../services/owners.service';
import { Router } from '@angular/router';
import { ErrorComponent } from '../../helper/error/error.component';

@Component({
  selector: 'app-add-owner',
  standalone: true,
  imports: [FormsModule, CommonModule, ErrorComponent, ReactiveFormsModule],
  templateUrl: './add-owner.component.html',
  styleUrl: './add-owner.component.css'
})
export class AddOwnerComponent {
  public newOwnerForm: FormGroup;

  public isError = false;
  public errorText = '';
  
  constructor(private ownersService: OwnersService, private router:Router){
    this.newOwnerForm = new FormGroup({
      'name': new FormControl(null),
      'surname': new FormControl(null),
      'phone': new FormControl(null),
      'email': new FormControl(null),
      'address': new FormControl(null)
    })
   }

  public ownerSubmit() {
    this.ownersService.addOwner(this.newOwnerForm.value).subscribe({
      next: (data) => {
        this.router.navigate(['owners', 'list']);
      },
      error: (error) => {
        this.isError=true;
        this.errorText=error.error.text;        
      }  
    });
  }

}
