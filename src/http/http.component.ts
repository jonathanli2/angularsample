import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { of, OperatorFunction, Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpComponent implements OnInit {
  loadedPosts = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.onFetchPosts();

    const nums = of(1, 2, 3, 4, 5, 6);

    const squareValues = map(
        (val: number) => val * val
      );
    let obs: Observable<number> = squareValues(nums);
    obs.subscribe( v => {
      console.log(v);
    });

    const odd = filter((n: number, ind: number) => {
      console.log('number ', ind, ' = ', n);
      return n % 2 !== 0;
    });
    obs = odd(nums);
    obs.subscribe( v => {
      console.log(v);
    });

    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );

    const squareOdd = squareOddVals(nums);
    squareOdd.subscribe( x => {
      console.log(x);
    });

    const sqEven = of(1, 2, 3, 4, 5, 6)
      .pipe(
        filter((n: number) => n %2 === 0),
        map(n => n * n)
      ).subscribe( x =>
        console.log(x)
      );
}

  onCreatePost(postData: {title: string, content: string}) {
    console.log(postData);
    this.http.post('https://restapitest-d6f8c.firebaseio.com/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.http.get('https://restapitest-d6f8c.firebaseio.com/posts.json')
      .subscribe(data => {
        console.log(data);
      });
  }

  onClearPosts() {

  }
}
