import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, Posts } from 'src/model/post.model';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({providedIn: 'root'})

export class PostsService {
    baseUrlPath = 'https://restapitest-d6f8c.firebaseio.com/mydb/post';
    jsonSuffix = '.json';

    constructor(private http: HttpClient) {
    }

    postData(subPath, payload) {
        if (subPath) {
          subPath = '/' + subPath;
        }
        this.http.post(this.baseUrlPath + subPath + this.jsonSuffix, payload)
        .subscribe(responseData => {
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

    fetchPosts()  {
        return this.http.get(this.baseUrlPath + this.jsonSuffix)
        .pipe( map( (responseData: Posts) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({... responseData[key], id: key});
            }
          }
          return postArray;
        }));
    }

    deletePosts() {
      return this.http.delete(this.baseUrlPath + this.jsonSuffix);
    }
}