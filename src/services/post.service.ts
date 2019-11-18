import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, Posts } from 'src/model/post.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class PostsService {
    constructor(private http: HttpClient) {

    }

    createAndStorePost(title: string, content: string) {
        const post: Post = {title, content};
        this.http.post('https://restapitest-d6f8c.firebaseio.com/posts.json', post)
        .subscribe(responseData => {
          console.log(responseData);
        });
    }

    fetchPosts()  {
        return this.http.get('https://restapitest-d6f8c.firebaseio.com/posts.json')
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
      return this.http.delete('https://restapitest-d6f8c.firebaseio.com/posts.json');
    }
}