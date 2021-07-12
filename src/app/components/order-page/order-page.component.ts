import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newBurgerForm = new FormGroup({
    valueForBun: new FormControl(''),
    valueForMeat: new FormControl(''),
    valueForTopping: new FormControl('')
  })

  submitBurgerOrder(order: any){
    console.log(order);
    
  }

}
