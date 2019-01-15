import { Component, OnInit } from '@angular/core';
import {Chart} from '../../../node_modules/chart.js';
@Component({
  selector: 'app-newstats',
  templateUrl: './newstats.component.html',
  styleUrls: ['./newstats.component.css']
})
export class NewstatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    new Chart(document.getElementById("line-chart"), {
			type: 'line',
			data: {
				labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				datasets: [{
					label: 'My First dataset',
					borderColor: '#FDBF00',
					backgroundColor: '#FDBF00',
					data: [
						0.1, 0.6, 0.4, 0.9, 0.9, 1.1, 0.8
					],
				}, {
					label: 'My Second dataset',
					borderColor: '#78FCF8',
					backgroundColor: '#78FCF8',
					data: [
            0.9, 0.5, 0.7, 0.3, 2, 0.4, 1.4
					],
				}, {
					label: 'My Third dataset',
					borderColor: '#6F5B54',
					backgroundColor: '#6F5B54',
					data: [
            0.3, 0.6, 0.9, 1, 1.5, 1.2, 2
					],
				}, {
					label: 'My Forth dataset',
					borderColor:'#54BA76',
					backgroundColor: '#54BA76',
					data: [
            0.7, 0.8, 0.2, 0.1, 0.4, 1.5, 1.3
					],
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Chart.js Line Chart - Stacked Area'
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

    new Chart(document.getElementById("dif-point-chart"), {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'dataset - big points',
        data: [
          0.1, 0.6, 0.4, 0.9, 0.9, 1.1, 0.8
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
          0.9, 0.5, 0.7, 0.3, 2, 0.4, 1.4
        ],
        backgroundColor: '#78FCF8',
        borderColor:'#78FCF8',
        fill: false,
        borderDash: [5, 5],
        pointRadius: [2, 4, 6, 18, 0, 12, 20],
      }, {
        label: 'dataset - large pointHoverRadius',
        data: [
          0.3, 0.6, 0.9, 1, 1.5, 1.2, 2
        ],
        backgroundColor: '#54BA76',
        borderColor: '#54BA76',
        fill: false,
        pointHoverRadius: 30,
      }, {
        label: 'dataset - large pointHitRadius',
        data: [
          0.7, 0.8, 0.2, 0.1, 0.4, 1.5, 1.3
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
        text: 'Chart.js Line Chart - Different point sizes'
      }
    }
  });
	
    
    


    new Chart(document.getElementById("bubble-chart"), {
      type: 'bubble',
      data:{
        datasets: [{
        label: ['Deer Population'],
        data: [{
          x: 100,
          y: 0,
          r: 10
        }, {
          x: 60,
          y: 30,
          r: 20
        }, {
          x: 40,
          y: 60,
          r: 25
        }, {
          x: 80,
          y: 80,
          r: 50
        }, {
          x: 20,
          y: 30,
          r: 25
        }, {
          x: 0,
          y: 100,
          r: 5
        }],
        backgroundColor: "#FF7816",
        
      }]}
    });

    

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
  };
  }
