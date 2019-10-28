import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcmp1',
  templateUrl: './subcmp1.component.html',
  styleUrls: ['./subcmp1.component.css']
})
export class Subcmp1Component implements OnInit {
  id: number;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
  }

}
