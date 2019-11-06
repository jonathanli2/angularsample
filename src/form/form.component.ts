import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f', {static: false}) view;
  @ViewChild('first', {static: true}) firstNameValue;
  @ViewChild('middleNameRef', {static: true}) middleName;
  @ViewChild('lre', {static: true})  lastName;

  middleNameValue = 'default Midname';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onsubmited clicked, ', this.view);
    console.log('first reference variable', this.firstNameValue);
    console.log('last name reference variable', this.lastName, this.lastName.errors);
  }
}
