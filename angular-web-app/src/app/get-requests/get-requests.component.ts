import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-get-requests',
  templateUrl: './get-requests.component.html',
  styleUrls: ['./get-requests.component.css']
})
export class GetRequestsComponent implements OnInit {

  constructor( private http: HttpClient) { }

    readonly ROOT_URL='http://62.108.10.166:9000';
    activities: any;

    getActivities(){
        this.activities=this.http.get(this.ROOT_URL+'/activities/5');
        console.log(this.activities);
    }

  ngOnInit() {
  }

}
