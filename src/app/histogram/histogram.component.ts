import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadChart();
  }

  loadChart() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Topping');
      data.addColumn('number', 'Date');

      for (let i = 0; i < 40; i++) { 
        data.addRow([i, Math.round(Math.random() * 5)]);
      }

      // Set chart options
      var options = {
        title: '',
        width: '100%',
        height: 60,
        chartArea: {
          left:0, top:0, width:'100%', height:'100%'
        },
        bar: {
          groupWidth: '90%'
        },
        // animation: {
        //   duration: 300,
        //   easing: 'out',
        // },
        vAxis: {
          minValue: 0,
          maxValue: 5,
          gridlines: {
            color: "#FFFFFF",
            // count: 0
          },
          textPosition: 'none',
          baselineColor: "black"
        },
        hAxis: {
          gridlines: {
            color: "#FFFFFF",
            // count: 0
          },
          textPosition: 'none',
          baselineColor: "transparent"
        },
        legend: 'none',
        tooltip: {
          trigger: 'none'
        }
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
      let i = 40;
      setInterval(() => { 
        data.removeRow(0);
        data.addRow([i, Math.round(Math.random() * 5)]);
        chart.draw(data, options);
        i++;
      }, 1000);

    }
  }

}
