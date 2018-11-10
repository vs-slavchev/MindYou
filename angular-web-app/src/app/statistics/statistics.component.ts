import { Component, OnInit } from '@angular/core';
import {Chart} from '../../../node_modules/chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

    LineChart =[];

  ngOnInit() {
    this.LineChart=new Chart('lineChart',{
      type:'line',
        data:{
          labels: ["Eating", "Reading", "Gym", "Watching TV", "Meditating", "Running"],
              datasets: [{
            label: 'Number of Hours spent in a month',
                data:[9,7,3,5,10,16],
                fill:false,
                lineTension: 0.2,
                borderColor:"red",
                borderWidth:1
            }]
          },
          options:{
            title:{
                text:"Month of Activities",
                display:true
            },
              scales:{
                yAxes:[{
                  ticks:{
                    beginAtZero:true
                  }
            }]
          }
        }
    });
  }
}

