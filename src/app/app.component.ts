import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'angularSample';
  currentTab = '';

  constructor(private router: Router,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.currentTab = 'home';
    // this.router.navigate(['/']);
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
    });
  }

  onSelect(data: TabDirective): void {
    this.currentTab = data.id;
    if (data.id === 'home') {
      this.router.navigate([''], {relativeTo: this.activatedRoute});
    } else if (data.id === 'comp1') {
      this.router.navigate(['c1'], {relativeTo: this.activatedRoute});
    } else if (data.id === 'comp2') {
      this.router.navigate(['c2'], {relativeTo: this.activatedRoute});
    }
  }
}
