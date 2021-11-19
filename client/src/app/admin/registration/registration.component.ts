import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { AuthService } from '../../models/auth.service';

import { User } from '../../models/user.model';

@Component({
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit
{
  public user: User;
  public errorMessage: string;

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void
  {
    this.user = new User();
  }

  register(form: NgForm): void
  {
    if (form.valid)
    {
      // perform authentication
      this.auth.register(this.user).subscribe(data => {
        if (data.success)
        {
          this.auth.storeUserData(data.token, data.user);
          this.router.navigateByUrl('admin/main');
        }
        else{
          this.errorMessage = data.msg;
        }
      });
    }
    else
    {
      this.errorMessage = 'Form Data Invalid';
    }
  }

}
