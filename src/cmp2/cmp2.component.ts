import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
