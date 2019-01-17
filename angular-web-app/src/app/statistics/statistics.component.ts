import {Component, OnInit} from '@angular/core';
import {Chart} from '../../../node_modules/chart.js';
import { StatisticsService } from './statistics.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css'],
    providers:[StatisticsService]
})

export class StatisticsComponent implements OnInit {

 
    constructor(private statService : StatisticsService, private router: Router) {   
    }
     
    statistics=[];
    Ostatistics=[];
    BarChart = [];
    MultiLineChart=[];
    DoughnutChart = [];
    DoublelineChartData=[];
    ngOnInit() {

        let currentUrl = this.router.url;
        console.log(currentUrl);
        var activities=[];
        var hours=[];
        var Oactivities=[];
        var Ohours=[];
        // this.statService.getOlderStats().subscribe((oldStats)=>{
        //     this.Ostatistics=oldStats;
        //     //console.log("Stats for the past month: " +this.Ostatistics);
        // })
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
            
    
            this.BarChart = new Chart('barChart', {
                type: 'bar',
                data: {
                    labels: activities,
                    datasets: [{
                        label: '# of hours spent in a day',
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
    
    
            this.DoughnutChart = new Chart('doughnutChart', {
                type: 'doughnut',
                data: {
                    labels: activities,
                    datasets: [{
                        label: '# of hours spent in a day',
                        data: hours,
                        backgroundColor: [
                            '#78FCF8',
                            '#FF7816',
                            '#54BA76',
                            '#6F5B54',
                            '#FDBF00',
                            '#B1DFC0',
                            '#DAFEFD',
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
                            '#78FCF8',
                            '#2E2300',
                            '#214544',
                            '#FFB57F'

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

        

    
    })
}
}