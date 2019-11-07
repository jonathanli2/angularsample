import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm, NgModel, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {
  // @ViewChild('lre', {static: true})  lastName: NgModel;
  myForm: FormGroup;
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      myFirstName: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  onClick(e: NgModel) {
    console.log(e);
    console.log(this.myForm);
  }
}
