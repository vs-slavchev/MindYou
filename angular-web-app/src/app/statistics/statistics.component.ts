import { Component, OnInit } from '@angular/core';
import {Chart} from '../../../node_modules/chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

    LineChart =[];
    BarChart=[];
    DoughnutChart=[];
  ngOnInit() {
    this.LineChart=new Chart('lineChart',{
      type:'line',
        data:{
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
              datasets: [{
            label: '# of Hours spent using the phone',
                data:[9,7,3,5,10,16,12],
                fill:true,
                lineTension: 0.2,
                borderColor:"#FF7816",
                borderWidth:1
            }]
          },
          options:{
            title:{
                text:"Phone usage in a week",
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

    this.BarChart=new Chart('barChart',{
       type:'bar',
    data:{
           labels:["Running",  "Reading", "Gym", "Watching TV", "Meditating", "Eating"],
        datasets:[{
               label:'# of hours spent in a week',
            data:[9,12,4,17,2, 10],
            backgroundColor:[
                '#78FCF8',
                '#FF7816',
                '#54BA76',
                '#6F5B54',
                '#FDBF00',
                '#B1DFC0'
            ],
            borderColor:[
                '#2C5C5B',
                '#74370A',
                '#1F442B',
                '#332A27',
                '#735700',
                '#3E8856'
            ],
            borderWidth:1
        }]
    },
    options:{
           title:{
               text:"Bar Chart",
               display:true
           },
        scales:{
               yAxes:[{
                   ticks:{beginAtZero:true}
               }]
        }
    }
    });


      this.DoughnutChart=new Chart('doughnutChart',{
          type:'doughnut',
          data:{
              labels:["Running",  "Reading", "Gym", "Watching TV", "Meditating", "Eating"],
              datasets:[{
                  label:'# of hours spent in a week',
                  data:[9,12,4,17,2, 10],
                  backgroundColor:[
                      '#78FCF8',
                      '#FF7816',
                      '#54BA76',
                      '#6F5B54',
                      '#FDBF00',
                      '#B1DFC0'
                  ],
                  borderColor:[
                      '#2C5C5B',
                      '#74370A',
                      '#1F442B',
                      '#332A27',
                      '#735700',
                      '#3E8856'
                  ],
                  borderWidth:1
              }]
          },
          options:{
              title:{
                  text:"One day of activities",
                  display:true
              },

          }
      });
  }
}

