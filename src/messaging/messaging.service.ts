import { EventEmitter } from '@angular/core';
import { Observable, Subscriber, Subject } from 'rxjs';

export class MessagingService {
    stockEventEmitter = new EventEmitter<number>();

    stockObservable: Observable<number>; // for receiver to subscribe the notification
    stockSubscriber: Subscriber<number>; // for sender to send notification

    stockSubject = new Subject<number>();

    constructor() {
        this.stockObservable = new Observable( (subscriber: Subscriber<number>) => {
            this.stockSubscriber = subscriber;
        });
    }
}
