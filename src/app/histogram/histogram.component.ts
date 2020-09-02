import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title = 'Students height, in cm';
  type = 'Histogram';
  data = [
    ["1", 80], ["2", 55], ["3", 68], ["4", 80], ["5", 54],
    ["6", 70], ["7", 85], ["8", 78], ["9", 70], ["10", 58],
    ["11", 90], ["12", 65], ["13", 88], ["14", 82], ["15", 65],
    ["16", 86], ["17", 45], ["18", 62], ["19", 84], ["20", 75],
    ["21", 82], ["22", 75], ["23", 58], ["24", 70], ["25", 85]
  ];
  columnNames = ["Student Roll No", "height"];
  options = {
    legend: 'none'
  };
  width = 550;
  height = 400;
}
