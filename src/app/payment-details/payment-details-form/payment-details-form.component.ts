import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {
  [x: string]: any;

  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.service.postPaymentDetails().subscribe(_res=>{
this.resetForm();
    },
    err=>{console.log(err)}
    );

resetForm(form:NgForm) {
  form.form.reset();
  this.service.formData = PaymentDetail();
}
    }
  }

