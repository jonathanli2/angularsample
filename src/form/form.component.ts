import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f', {static: false}) view;
  @ViewChild('first', {static: true}) firstNameValue;

  middleNameValue = 'default Midname';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onsubmited clicked, ', this.view);
    console.log('first reference variable', this.firstNameValue);
  }
}
