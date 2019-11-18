import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, throttleTime } from 'rxjs/operators';
import { of, OperatorFunction, Observable, pipe } from 'rxjs';
import { Post, Posts, Strings } from 'src/model/post.model';
import { PostsService } from 'src/services/post.service';

type MyFunc = (key: number, value: string) => void;

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})


export class HttpComponent implements OnInit {
  loadedPosts = [];
  myfunc: MyFunc;

  constructor(private http: HttpClient, private postService: PostsService) {
    this.myfunc = (n: number, v: string) => {
      console.log(v + ': ' + n);
    };
   }

  ngOnInit() {
    this.postService.fetchPosts().subscribe( {next: post =>
      this.loadedPosts = post
    });

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

  onCreatePost(postData: Post) {
    console.log(postData);
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.postService.fetchPosts().subscribe( {next: post =>
      this.loadedPosts = post
    });
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe( () => {
      this.loadedPosts = [];
    })
  }

  onTest() {
    this.myfunc(5, 'my number is');

    const s: Strings = ['abc', 'def'];
    const s1 = s[0];
    console.log(s1);
  }
}
