import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  // constructor() { }
  // getdatuser()
  // {
  //   return{
  //     name:'emmanuel',
  //     last_name:'saleem',
  //     age:4324234324
  //   }
  // }
  constructor(private http:HttpClient) {}
  getapidata()
  {
    let url="https://jsonplaceholder.typicode.com/posts";
    // let url="http://127.0.0.1:8000/api/student";
    return this.http.get(url);
  }

}
