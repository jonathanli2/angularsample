import { EventEmitter } from '@angular/core';
import { Observable, Subscriber, Subject, BehaviorSubject } from 'rxjs';

export class MessagingService {
    stockEventEmitter = new EventEmitter<number>();

    stockObservable: Observable<number>; // for receiver to subscribe the notification
    stockSubscriber: Subscriber<number>; // for sender to send notification

    stockSubject = new Subject<number>();

    stockBehaviorSubject = new BehaviorSubject<number>(1000);

    constructor() {
        this.stockObservable = new Observable( (subscriber: Subscriber<number>) => {
            this.stockSubscriber = subscriber;
        });
    }
}
