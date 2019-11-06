import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f', {static: false}) view: NgForm;
  @ViewChild('first', {static: true}) firstNameValue: NgModel;
  @ViewChild('middleNameRef', {static: true}) middleName: ElementRef;
  @ViewChild('lre', {static: true})  lastName: NgModel;

  middleNameValue = 'default Midname';

  genders = ['male', 'female'];
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onsubmited clicked, ', this.view);
    console.log('first reference variable', this.firstNameValue);
    console.log('last name reference variable', this.lastName, this.lastName.errors);
  }

  setUserName() {
    console.log('suggest username button clicked');
    this.view.form.patchValue(  {
      username:
      {
        lastname: 'singlevalue'
      }
    });
  }

  setFormData() {
    console.log('set form data');
    this.view.setValue({
      username:
        {
          lastname: 'mylast',
          middlename: 'mymid',
          firstname: 'myfirst'
        },
      email: 'myemail@gmail.com',
      secret: '',
      gender: 'female'
   });
  }
}
