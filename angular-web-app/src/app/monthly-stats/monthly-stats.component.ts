import { Component, OnInit } from '@angular/core';
import {Chart} from '../../../node_modules/chart.js';
import { MstatsService } from './mstats.service';
@Component({
  selector: 'app-monthly-stats',
  templateUrl: './monthly-stats.component.html',
  styleUrls: ['./monthly-stats.component.css'],
  providers:[MstatsService]
})
export class MonthlyStatsComponent implements OnInit {

  constructor(private statService: MstatsService) { }

    statistics=[];
    Ostatistics=[];
    LineChart = [];
    BarChart = [];
    BubbleChart=[];
    mstatistics=[];
    sAct=[];
  ngOnInit() {
        var activities=[];
        var hours=[];
        var Oactivities=[];
        var Ohours=[];
        var Iactivities=[];
        var Ihours=[];
        var r=[];
        var mactivities=[];
        var mhours=[];
       
        this.statService.getTopActivities().subscribe((stats) =>{
            this.statistics = stats;
            //console.log("statistics : "+ this.statistics);
           //console.log("the retrieved stats are: "+this.statistics);
            for(let stats of this.statistics){
                activities.push(stats.name);
                hours.push(stats.duration_minutes);
                r.push(stats.time_start);
                console.log("top activities: ");
                console.log(stats.name);
                console.log(stats.duration_minutes);
                console.log(stats.time_start);
            }
           
            
          this.statService.getSpecificStats().subscribe((oStats)=>{
            this.sAct= oStats;
            for(let act of this.sAct){
              Iactivities.push(act.activity_name);
              Ihours.push(act.hours);
              console.log("the specific activity: ");
              console.log(act.activity_name);
              console.log(act.hours);
            }
         

            this.statService.getOlderStats().subscribe((oldStats) =>{
              this.Ostatistics = oldStats;
             // console.log("the retrieved stats are: "+this.statistics);
              for(let Ostats of this.Ostatistics){
                  
                  Oactivities.push(Ostats.activity_name);
                  Ohours.push(Ostats.hours);
                  // console.log(Ostats.activity_name);
                  // console.log(Ostats.hours);
              }

              this.statService.getMonthlyStats().subscribe((mStats) =>{
                this.mstatistics = mStats;
               // console.log("the retrieved stats are: "+this.statistics);
                for(let Ostats of this.Ostatistics){
                    
                    mactivities.push(Ostats.activity_name);
                    mhours.push(Ostats.hours);
                    // console.log(Ostats.activity_name);
                    // console.log(Ostats.hours);
                }
            
             
   
    new Chart(document.getElementById("single-activity-chart"), {
      type: 'bar',
        data: {
          labels: ['Apr 1','Apr 2','Apr 3','Apr 4','Apr 5','Apr 6','Apr 7','Apr 8','Apr 9','Apr 10','Apr 11','Apr 12','Apr 13','Apr 14','Apr 15','Apr 16','Apr 17','Apr 18','Apr 19','Apr 20','Apr 21','Apr 22','Apr 23'],
          datasets: [{
            label: 'Whole Month daily chart',
            backgroundColor: '#54BA76',
            borderColor: '#78FCF8',
            data: [30, 24, 32, 12, 25, 27, 23, 20, 37, 34, 39, 42, 45, 23, 40, 21, 25, 38, 26, 29, 34, 31, 20, 19],
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            xAxes: [{
              
              distribution: 'series',
              ticks: {
                source: 'labels'
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of hours'
              }
            }]
          }
        }
      });

     
      this.BubbleChart=new Chart('bubble-chart', {
        type: 'bubble',
        data:{
          labels: activities,
          datasets: [{
          label: [activities[0], activities[1], activities[2], activities[3], activities[4],activities[5]],
          data:[{ 
                x: hours[0],
                y:r[0],
                r:40,
                
            },
            {
                x: hours[1],
                y:r[1],
                r:35
            },
                { 
                    x: hours[2],
                    y:r[2],
                    r:10
                },
                { 
                    x: hours[3],
                    y:r[3],
                    r:25
                },
                {
                    x: hours[4],
                    y:r[4],
                    r:20
                },
                {
                    x: hours[5],
                    y:r[5],
                    r:15
        }],
          backgroundColor: "#FF7816",
          
        }]}
      });
  
   

    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
          labels: mactivities,
          datasets: [{
              label: '# of hours spent in a month',
              data: mhours,
              backgroundColor: [
                  '#78FCF8',
                  '#FF7816',
                  '#54BA76',
                  '#6F5B54',
                  '#FDBF00',
                  '#B1DFC0',
                  '#735700',
                  '#4DA19E',
                  '#FFDABF',
              ],
              borderColor: [
                  '#2C5C5B',
                  '#74370A',
                  '#1F442B',
                  '#332A27',
                  '#735700',
                  '#3E8856',
                  '#2E2300',
                  '#214544',
                  '#FFB57F'
              ],
              borderWidth: 1
          }]
      },
      options: {
          title: {
              text: "Activities",
              display: true
          },
          scales: {
              yAxes: [{
                  ticks: {beginAtZero: true}
              }]
          }
      }
  });



    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
          labels: mactivities,
          datasets: [{
              label: '# of Hours spent on activities in the last month',
              data: mhours,
              fill: true,
              lineTension: 0.2,
              borderColor: "#FF7816",
              borderWidth: 1
          }]
      },
      options: {
          title: {
              text: "Activities in the last month",
              display: true
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
});


})


        })

      })

  }
 
}
