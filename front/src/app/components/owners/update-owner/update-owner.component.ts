import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnersService } from '../../../services/owners.service';

@Component({
  selector: 'app-update-owner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-owner.component.html',
  styleUrl: './update-owner.component.css'
})
export class UpdateOwnerComponent {

  public id?: number = 0;
  public name: string = '';
  public surname: string = '';
  public phone: string = '';
  public email: string = '';
  public address: string = '';
  
  constructor(private route: ActivatedRoute, private router: Router, private ownersService: OwnersService){
    console.log(this.route.snapshot.params['id']);
    this.ownersService.getOwner(this.route.snapshot.params['id']).subscribe((owner) => {
    this.name = owner.name;
    this.surname = owner.surname;
    this.phone = owner.phone;
    this.email = owner.email;
    this.address = owner.address;
    this.id = owner.id;
    })
  }

  public ownerSubmit(form:NgForm) {
    this.ownersService.updateOwner({id:this.id, ...form.form.value}).subscribe((data) => {
      this.router.navigate(['owners', 'list']);
    })
  }

}
