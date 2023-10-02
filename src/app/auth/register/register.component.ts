import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {

  }
  toLogin() {
    this.router.navigate(['/login'])
  }
  register() {

  }
}
