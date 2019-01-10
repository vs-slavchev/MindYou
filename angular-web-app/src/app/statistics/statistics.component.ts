import {Component, OnInit} from '@angular/core';
import {Chart} from '../../../node_modules/chart.js';
import { StatisticsService } from './statistics.service';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css'],
    providers:[StatisticsService]
})

export class StatisticsComponent implements OnInit {

 
    constructor(private statService : StatisticsService) {   
    }
     
    statistics=[];
    Ostatistics=[];
    LineChart = [];
    BarChart = [];
    MultiLineChart=[];
    DoughnutChart = [];
    DoublelineChartData=[];
    ngOnInit() {
        //console.log("FUCK");
        var activities=[];
        var hours=[];
        var Oactivities=[];
        var Ohours=[];
        this.statService.getOlderStats().subscribe((oldStats)=>{
            this.Ostatistics=oldStats;
            //console.log("Stats for the past month: " +this.Ostatistics);
        })
        this.statService.getStatistics().subscribe((stats) =>{
            this.statistics = stats;
            //console.log("statistics : "+ this.statistics);
           // console.log("the retrieved stats are: "+this.statistics);
            for(let stats of this.statistics){
                
                activities.push(stats.activity_name);
                hours.push(stats.hours);
                //console.log(stats.activity_name);
                //console.log(stats.hours);
            }
            
    
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
                            '#FFDABF'
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
    
    
            this.DoughnutChart = new Chart('doughnutChart', {
                type: 'doughnut',
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
                            '#B1DFC0'
                        ],
                        borderColor: [
                            '#2C5C5B',
                            '#74370A',
                            '#1F442B',
                            '#332A27',
                            '#735700',
                            '#3E8856'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        text: "One day of activities",
                        display: true
                    },
    
                }
            });
        });
       
        this.statService.getOlderStats().subscribe((oldStats) =>{
            this.Ostatistics = oldStats;
           // console.log("the retrieved stats are: "+this.statistics);
            for(let Ostats of this.Ostatistics){
                
                Oactivities.push(Ostats.activity_name);
                Ohours.push(Ostats.hours);
                console.log(Ostats.activity_name);
                console.log(Ostats.hours);

            }
            this.LineChart = new Chart('lineChart', {
                type: 'line',
                data: {
                    labels: Oactivities,
                    datasets: [{
                        label: '# of Hours spent on activities in the last three months',
                        data: Ohours,
                        fill: true,
                        lineTension: 0.2,
                        borderColor: "#FF7816",
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        text: "Activities in the last months",
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


        new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
              labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
              datasets: [{ 
                  data: [86,114,106,106,107,111,133,221,783,2478],
                  label: "Africa",
                  borderColor: "#3e95cd",
                  fill: false
                }, { 
                  data: [282,350,411,502,635,809,947,1402,3700,5267],
                  label: "Asia",
                  borderColor: "#8e5ea2",
                  fill: false
                }, { 
                  data: [168,170,178,190,203,276,408,547,675,734],
                  label: "Europe",
                  borderColor: "#3cba9f",
                  fill: false
                }, { 
                  data: [40,20,10,16,24,38,74,167,508,784],
                  label: "Latin America",
                  borderColor: "#e8c3b9",
                  fill: false
                }, { 
                  data: [6,3,2,2,7,26,82,172,312,433],
                  label: "North America",
                  borderColor: "#c45850",
                  fill: false
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: 'World population per region (in millions)'
              }
            }
          });

        var Json = [{"activity_name": "cleaning", "hours": 0.33}, {
            "activity_name": "commuting",
            "hours": 1.66
        }, {"activity_name": "cooking", "hours": 1.33}, {
            "activity_name": "eating",
            "hours": 1.25
        }, {"activity_name": "gym", "hours": 2.00}, {
            "activity_name": "music",
            "hours": 0.75
        }, {"activity_name": "reading", "hours": 1.00}, {
            "activity_name": "studying",
            "hours": 5.50
        }, {"activity_name": "working", "hours": 8.00}]

        // this.MultiLineChart=new Chart('multiLineChart',{
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		// 	datasets: [{
		// 		label: 'My First dataset',
		// 		borderColor: '#FF0000',
		// 		backgroundColor: '#FFFF00',
		// 		fill: false,
		// 		data: Json;
        // })
        var Json1 = [{"activity_name": "cleaning", "hours": 0.45}, {
            "activity_name": "commuting",
            "hours": 1.66
        }, {"activity_name": "cooking", "hours": 0.88}, {
            "activity_name": "eating",
            "hours": 1.25
        }, {"activity_name": "gym", "hours": 3.50}, {
            "activity_name": "music",
            "hours": 0.75
        }, {"activity_name": "reading", "hours": 1.50}, {
            "activity_name": "studying",
            "hours": 5.50
        }, {"activity_name": "working", "hours": 9.00}]

        
    };

    
}

