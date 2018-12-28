import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {

    }
    getusers(){
      return this.http.get('https://jsonplaceholder.typicode.com/users')
    }

    getuser(userId){
      return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
    }

    getposts(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }
   }

