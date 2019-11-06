import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {
  // @ViewChild('lre', {static: true})  lastName: NgModel;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick(e: NgModel) {
    console.log(e);
  }
}
