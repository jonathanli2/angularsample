import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post, Posts } from 'src/model/post.model';
import { map, take, tap, exhaustMap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { AuthService } from 'src/auth/auth.service';

@Injectable({ providedIn: 'root' })

export class PostsService {
  baseUrlPath = 'https://restapitest-d6f8c.firebaseio.com/mydb/post';
  jsonSuffix = '.json';

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  postData(subPath, payload) {
    this.authService.user.pipe(
      take(1),
      tap(data => console.log(data)),
      exhaustMap(userdata => {
        console.log(userdata);
        if (subPath) {
          subPath = '/' + subPath;
        }

        // tslint:disable-next-line: max-line-length
        return this.http.post(
          this.baseUrlPath + subPath + this.jsonSuffix,
          payload,
          {params: new HttpParams().set('auth', userdata ? userdata.token : '')}
          );
      })
    ).subscribe(responseData => {
        console.log(responseData);
      });
  }

  putData(subPath, payload) {
    if (subPath) {
      subPath = '/' + subPath;
    }

    this.http.put(this.baseUrlPath + subPath + this.jsonSuffix, payload)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    return this.authService.user.pipe(
      take(1),
      tap(data => console.log(data)),
      exhaustMap(userdata => {
       return this.http.get(this.baseUrlPath + this.jsonSuffix, {params: new HttpParams().set('auth', userdata ? userdata.token : '')})
        .pipe(map((responseData: Posts) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        }));
      })
    );
  }

  deletePosts() {
    return this.http.delete(this.baseUrlPath + this.jsonSuffix);
  }
}