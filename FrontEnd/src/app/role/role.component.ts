import { Component, OnInit } from '@angular/core';
import { Role } from '../models/role.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss',
]
})
export class RoleComponent implements OnInit {

  constructor(private services:UserService) { }

  roles : Role[] = [];

  ngOnInit(): void {
    this.services.getAllRoles().subscribe((data)=>
    {
      this.roles=data;
      console.log('Role: ',data);
    });
  }

}
