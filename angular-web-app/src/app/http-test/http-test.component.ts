import { Component, OnInit } from '@angular/core';
import {HttpTestService} from "./http-test.service";

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
    providers:[HttpTestService]
})
export class HttpTestComponent implements OnInit {

  public activities=[];

  constructor(private actService: HttpTestService) { }

  ngOnInit() {
  this.actService.getActivities().subscribe(data =>this.activities = data);
  }


}
