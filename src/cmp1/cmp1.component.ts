import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  }

  onC1ButtonClicked(myid) {
    this.router.navigate(['c1', myid], {/*relativeTo: this.activatedRoute,*/ queryParams:{index: myid}, fragment: 'here' + myid});
  }

  onC2ButtonClicked(myid) {
    this.router.navigate(['c2', 'sub1', myid], {/*relativeTo: this.activatedRoute, */queryParams:{index: myid}, fragment: 'here' + myid});
  }

}
