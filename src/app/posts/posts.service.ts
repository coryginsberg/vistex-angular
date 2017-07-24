import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Post } from './post';

@Injectable()
export class PostsService {

  private postsUrl = '{YOUR-SITE-NAME}/wp-json/wp/v2/';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts')
        .map((res: Response) => res.json());
  }

}

class Person {
  private name: string;
  private age: number;
  private salary: number;

  constructor(name: string, age: number, salary: number) {
      this.name = name;
      this.age = age;
      this.salary = salary;
  }

  toString(): string {
      return `${this.name} (${this.age}) (${this.salary})`; // As of version 1.4
  }
}
