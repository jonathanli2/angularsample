import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-subcmp1',
  templateUrl: './subcmp1.component.html',
  styleUrls: ['./subcmp1.component.css']
})
export class Subcmp1Component implements OnInit {
  id: string;
  index: string;
  fragment: string;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.index = this.activatedRoute.snapshot.queryParamMap.get('index');
    this.fragment = this.activatedRoute.snapshot.fragment;

    this.activatedRoute.paramMap.subscribe(
      (pMap: ParamMap) => {
        this.id = pMap.get('id');
      }
    );

    this.activatedRoute.queryParamMap.subscribe(
      (pMap: ParamMap) => {
        this.index = pMap.get('index');
      }
    );

    this.activatedRoute.fragment.subscribe(
      (pstr: string) => {
        this.fragment = pstr;
      }
    )
  }

}
