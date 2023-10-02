import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isLoading = false;
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private cartService: CartService
  ) { }
  ngOnInit(): void {
    this.getAllCart()
  }
  getAllCart() {
    this.cartService.getAllCart(2).subscribe((res: any) => {
      console.log(res)
    })
  }
  confirmBuy(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure to complete the payment process?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.showBuySuccess();
      },
      reject: () => {
        this.showBuyError()
      }

    });
  }
  confirmBack(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to back?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.router.navigate(['/main/products/list'])
      },
      reject: () => {
      }

    });
  }
  showBuySuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Payment was completed successfully. Please wait to receive the product' });
  }
  showBuyError() {
    this.messageService.add({ severity: 'error', summary: 'error', detail: 'The payment process was not completed' });
  }


}
