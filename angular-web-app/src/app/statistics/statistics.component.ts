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

    public statistics=[];
    constructor(private statService : StatisticsService) {
        
    }
     
    
    LineChart = [];
    BarChart = [];
    DoughnutChart = [];

    ngOnInit() {
        this.statService.getStatistics().subscribe(data =>this.statistics = data);
        console.log(this.statistics);

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

        var activities=[];
        var hours=[]
        for(var object of Json){
            activities.push(object.activity_name);
            hours.push(object.hours);
        }
        //console.log(activities);
        //console.log(activities);

        this.LineChart = new Chart('lineChart', {
            type: 'line',
            data: {
                labels: activities,
                datasets: [{
                    label: '# of Hours spent using the phone',
                    data: hours,
                    fill: true,
                    lineTension: 0.2,
                    borderColor: "#FF7816",
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    text: "Phone usage in a week",
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
                labels: ["Running", "Reading", "Gym", "Watching TV", "Meditating", "Eating"],
                datasets: [{
                    label: '# of hours spent in a week',
                    data: [9, 12, 4, 17, 2, 10],
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


    }
}

