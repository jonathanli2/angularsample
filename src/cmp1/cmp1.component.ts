import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onC1ButtonClicked() {

  }

}
