import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  num1: number = 1;
  num2: number = 1;
  num3: number = 1;
  num4: number = 1;

  burger = [];
  price: number = 5.50 + 2;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.burger.push('chicken')
    this.burger.push('meat')
    this.burger.push('vegetable')
    this.burger.push('cheese')
  }

  onResize(event) {
    event.target.innerWidth;
  }

  registrationForm = this.fb.group({
    item1: [this.num1, Validators.required],
    item2: [this.num2, Validators.required],
    item3: [this.num3, Validators.required],
    item4: [this.num4, Validators.required],

  })

  plus1() {
    if (this.num1 < 3) {
      this.num1 = this.num1 + 1
      this.registrationForm.patchValue({
        item1: this.num1 
      })
      this.burger.push('chicken')
      this.price = this.price + 2
    }
  }
  plus2() {
    if (this.num2 < 3) {
      this.num2 = this.num2 + 1
      this.registrationForm.patchValue({
        item2: this.num2 
      })
      this.burger.push('meat')
      this.price = this.price + 2
    }
  }
  plus3() {
    if (this.num3 < 3) {
      this.num3 = this.num3 + 1
      this.registrationForm.patchValue({
        item3: this.num3
      })
      this.burger.push('vegetable')
      this.price = this.price + .5
    }
  }
  plus4() {
    if (this.num4 < 3) {
      this.num4 = this.num4 + 1
      this.registrationForm.patchValue({
        item4: this.num4 
      })
      this.burger.push('cheese')
      this.price = this.price + 1
    }

  }
  minus1() {
    if (this.num1 > 0) {
      this.num1 = this.num1 - 1
      this.registrationForm.patchValue({
        item1: this.num1 
      })
      if (this.burger.indexOf("chicken") >= 0){
        this.burger.splice(this.burger.indexOf("chicken"), 1);
     }
     this.price = this.price - 2
    }
  }
  minus2() {
    if (this.num2 > 0) {
      this.num2 = this.num2 - 1
      this.registrationForm.patchValue({
        item2: this.num2 
      })
      if (this.burger.indexOf("meat") >= 0){
        this.burger.splice(this.burger.indexOf("meat"), 1);
     }
     this.price = this.price - 2
    }
  }
  minus3() {
    if (this.num3 > 0) {
      this.num3 = this.num3 - 1
      this.registrationForm.patchValue({
        item3: this.num3
      })
      if (this.burger.indexOf("vegetable") >= 0){
        this.burger.splice(this.burger.indexOf("vegetable"), 1);
     }
     this.price = this.price - .5
    }
  }
  minus4() {
    if (this.num4 > 0) {
      this.num4 = this.num4 - 1
      this.registrationForm.patchValue({
        item4: this.num4 
      })
      if (this.burger.indexOf("cheese") >= 0){
        this.burger.splice(this.burger.indexOf("cheese"), 1);
     }
     this.price = this.price - 1
    }
  }
}
