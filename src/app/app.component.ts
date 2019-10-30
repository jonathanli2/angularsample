import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularSample';
  currentTab = '';
  count = 0;
  private sub: Subscription;

  constructor(private router: Router,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.currentTab = 'home';
    // this.router.navigate(['/']);
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
    });

    this.sub = interval(1000).subscribe(c  => {
      this.count = c;
      console.log(c);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
