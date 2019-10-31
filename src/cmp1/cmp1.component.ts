import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagingService } from '../messaging/messaging.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {
  stockPrice = 100;
  isBehaviorSubject: boolean;

  constructor(public activatedRoute: ActivatedRoute, public router: Router, private messaging: MessagingService  ) { }

  ngOnInit() {
  }

  onC1ButtonClicked(myid) {
    this.router.navigate(['c1', myid], {/*relativeTo: this.activatedRoute,*/ queryParams:{index: myid}, fragment: 'here' + myid});
  }

  onC2ButtonClicked(myid) {
    this.router.navigate(['c2', 'sub1', myid], {/*relativeTo: this.activatedRoute, */queryParams:{index: myid}, fragment: 'here' + myid});
  }

  onUpdateStockPrice(priceChange: number) {
    this.stockPrice = this.stockPrice + priceChange;
    this.messaging.stockEventEmitter.emit(this.stockPrice);
  }

  onUpdateStockPriceByObservable(priceChange: number) {
    this.stockPrice = this.stockPrice + priceChange;
    this.messaging.stockSubscriber.next(this.stockPrice);
  }
  onErrorStockPriceByObservable() {
    this.messaging.stockSubscriber.error('error happened in stock price observable');
  }
  onCompleteStockPriceByObservable() {
    this.messaging.stockSubscriber.complete();
  }

  onUpdateStockPriceBySubject(priceChange: number) {
 
    if (this.isBehaviorSubject) {
      this.messaging.stockBehaviorSubject.next(this.messaging.stockBehaviorSubject.value + priceChange);
    } else {
      this.stockPrice = this.stockPrice + priceChange;
      this.messaging.stockSubject.next(this.stockPrice);
    }
  }
  onErrorStockPriceBySubject() {
    if (this.isBehaviorSubject) {
      this.messaging.stockBehaviorSubject.error('error happens in behaviorsubject');
    } else {
      this.messaging.stockSubject.error('error happened in stock price subject');
    }
  }
  onCompleteStockPriceBySubject() {
    if (this.isBehaviorSubject) {
      this.messaging.stockBehaviorSubject.complete();
    } else {
      this.messaging.stockSubject.complete();
    }
  }
}
