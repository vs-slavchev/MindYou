import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart} from '../../../node_modules/chart.js';
import { NewstatsService } from './newstats.service.js';
import { NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
@Component({
  selector: 'app-newstats',
  templateUrl: './newstats.component.html',
  styleUrls: ['./newstats.component.css'],
  providers:[NewstatsService]
})
export class NewstatsComponent implements OnInit {

  constructor(private statService : NewstatsService) { }
  statistics=[];
  BarChart=[];
  statisticsTop=[];
  ngOnInit() {

    var activities=[];
    var hours=[];
    var fdays=[];
    var fhours=[];
    var tact=[];
    var tid=[];
    
    //this.statistics.push({ "activity_name": "bla", "hours": 15, "time_start": "now", "duration_minutes": 7768, "id": 2});
    //this.statistics.push({ "activity_name": "ble", "hours": 15, "time_start": "now", "duration_minutes": 7768, "id": 2});
   
    this.statService.getStatistics().subscribe((stats) =>{
      this.statistics = stats;
      //console.log("statistics : "+ this.statistics);
     //console.log("the retrieved stats are: "+this.statistics);
      for(let stats of this.statistics){
          
          activities.push(stats.activity_name);
          hours.push(stats.hours);
          console.log(stats.activity_name);
          console.log(stats.hours);
      }

      this.statService.getFourWeeks().subscribe((stats) =>{
        this.statistics = stats;
        //console.log("statistics : "+ this.statistics);
       //console.log("the retrieved stats are: "+this.statistics);
        for(let stats of this.statistics){
            
            fdays.push(stats.time_start);
            fhours.push(stats.duration_minutes);
            console.log(stats.time_start);
            console.log(stats.duration_minutes);
        }

        this.statService.getTop().subscribe((stats) =>{
          this.statisticsTop = stats;
          //console.log("statistics : "+ this.statistics);
         //console.log("the retrieved stats are: "+this.statistics);
         
         for(let stats of this.statistics){
              tact.push(stats.name);
              tid.push(stats.id);
              
          }
    
      new Chart(document.getElementById("line-chart"), {
			type: 'line',
			data: {
				labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				datasets: [{
					label: 'This week',
					borderColor: '#FDBF00',
					backgroundColor: '#FDBF00',
					data: [
						fhours[0], 	fhours[1],	fhours[2],	fhours[3],	fhours[4],	fhours[5],	fhours[6],
					],
				}, {
					label: 'One week ago',
					borderColor: '#78FCF8',
					backgroundColor: '#78FCF8',
					data: [
            fhours[7], 	fhours[8],	fhours[9],	fhours[10],	fhours[11],	fhours[12],	fhours[13]
					],
				}, {
					label: 'Two weeks ago',
					borderColor: '#6F5B54',
					backgroundColor: '#6F5B54',
					data: [
            fhours[14], 	fhours[15],	fhours[16],	fhours[17],	fhours[18],	fhours[19],	fhours[20]
					],
				}, {
					label: 'Three weeks ago',
					borderColor:'#54BA76',
					backgroundColor: '#54BA76',
					data: [
            fhours[21], 	fhours[22],	fhours[23],	fhours[24],	fhours[25],	fhours[26],	fhours[27]
					],
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Stacked Area Chart'
				},
				tooltips: {
					mode: 'index',
				},
				hover: {
					mode: 'index'
				},
				scales: {
					xAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						stacked: false,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				}
			}
    });

    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
          labels: activities,
          datasets: [{
              label: '# of hours spent in a week',
              data: hours,
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


    new Chart(document.getElementById("dif-point-chart"), {
    type: 'line',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: 'dataset - big points',
        data: [
          fhours[0], 	fhours[1],	fhours[2],	fhours[3],	fhours[4],	fhours[5],	fhours[6],
        ],
        backgroundColor: '#FDBF00',
        borderColor:'#FDBF00',
        fill: false,
        borderDash: [5, 5],
        pointRadius: 15,
        pointHoverRadius: 10,
      }, {
        label: 'dataset - individual point sizes',
        data: [
          fhours[7], 	fhours[8],	fhours[9],	fhours[10],	fhours[11],	fhours[12],	fhours[13]
        ],
        backgroundColor: '#78FCF8',
        borderColor:'#78FCF8',
        fill: false,
        borderDash: [5, 5],
        pointRadius: [2, 4, 6, 18, 0, 12, 20],
      }, {
        label: 'dataset - large pointHoverRadius',
        data: [
          fhours[14], 	fhours[15],	fhours[16],	fhours[17],	fhours[18],	fhours[19],	fhours[20]
        ],
        backgroundColor: '#54BA76',
        borderColor: '#54BA76',
        fill: false,
        pointHoverRadius: 30,
      }, {
        label: 'dataset - large pointHitRadius',
        data: [
          fhours[21], 	fhours[22],	fhours[23],	fhours[24],	fhours[25],	fhours[26],	fhours[27]

        ],
        backgroundColor:'#6F5B54',
        borderColor: '#6F5B54',
        fill: false,
        pointHitRadius: 20,
      }]
    },
    options: {
      responsive: true,
      legend: {
        position: 'bottom',
      },
      hover: {
        mode: 'index'
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }]
      },
      title: {
        display: true,
        text: 'Different point sizes chart'
      }
    }
  });
	
    
    


   
    

    
  });
})
   })
  }
};
