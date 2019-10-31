import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { MessagingService } from '../messaging/messaging.service';

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
  private eventSub: Subscription;
  private stockObservableSub: Subscription;
  private stockSubjectSub: Subscription;
  private stockBehaviroSubjectSub: Subscription;

  stockPrice: number;
  stockpriceFromBehaviorSubject: number;
  stockPriceError: string;
  stockpriceFromBehaviorSubjectError: string;

  constructor(private router: Router,
              public activatedRoute: ActivatedRoute,
              private messaging: MessagingService) {
  }

  ngOnInit() {
    // this.currentTab = 'home';
    // this.router.navigate(['/']);
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
    });

    this.sub = interval(1000).subscribe(c => {
      this.count = c;
      // console.log(c);
    });

    this.eventSub = this.messaging.stockEventEmitter.subscribe(price => {
      this.stockPrice = price;
    });

    this.stockObservableSub = this.messaging.stockObservable.subscribe(price => {
      this.stockPrice = price;
    }, error => {
      this.stockPrice = -1;
      this.stockPriceError = error;
    }, () => {
      this.stockPrice = -1;
      this.stockPriceError = 'observable completed!';
    });

    this.stockSubjectSub = this.messaging.stockSubject.subscribe(price => {
      this.stockPrice = price;
    }, error => {
      this.stockPrice = -1;
      this.stockPriceError = error;
    }, () => {
      this.stockPrice = -1;
      this.stockPriceError = 'subject completed!';
    });

    this.stockBehaviroSubjectSub = this.messaging.stockBehaviorSubject.subscribe(price => {
      this.stockpriceFromBehaviorSubject = price;
    }, error => {
      this.stockpriceFromBehaviorSubject = -1;
      this.stockpriceFromBehaviorSubjectError = error;
    }, () => {
      this.stockpriceFromBehaviorSubject = -1;
      this.stockpriceFromBehaviorSubjectError = 'behavior subject completed!';
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.eventSub.unsubscribe();
    this.stockObservableSub.unsubscribe();
    this.stockSubjectSub.unsubscribe();
  }

  onSelect(data: TabDirective): void {
    this.currentTab = data.id;
    if (data.id === 'home') {
      this.router.navigate([''], { relativeTo: this.activatedRoute });
    } else if (data.id === 'comp1') {
      this.router.navigate(['c1'], { relativeTo: this.activatedRoute });
    } else if (data.id === 'comp2') {
      this.router.navigate(['c2'], { relativeTo: this.activatedRoute });
    }
  }
}
