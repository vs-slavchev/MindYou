import { Component, OnInit } from '@angular/core';
import {HttpTestService} from "./http-test.service";
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
    providers:[HttpTestService]
})
export class HttpTestComponent implements OnInit {

  public activities=[];
  public stats=[];

  constructor(private actService: HttpTestService, private statsService: HttpTestService) { }

  ngOnInit() {
  this.actService.getActivities().subscribe(data =>this.activities = data);
  
  this.statsService.getStats().subscribe(datau=>this.stats=datau);
  }


}
