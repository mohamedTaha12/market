import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  model!: any;
  messages!: Message[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) { }
  ngOnInit(): void {
    this.createForm();

  }
  createForm() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
    });
  }
  login() {
    this.router.navigate(['/main/products/list'])
    this.show()
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
  toRegister() {
    this.router.navigate(['/register'])
  }
}
