import { Component, OnInit } from '@angular/core';
import {
  Event,
  Point,
  Line,
  TimelineProperties,
  TimelineSegment,
} from 'ngx-timeline-vertical';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.ngxPointInit();
    this.ngxTimelineThicknessInit();
    this.ngxTimelineSegmentsInit();
  }

  timelineThickness: string;
  startpoint: Point;
  endpoint: Point;
  //Ensure timelineSegments is initialized to an empty array. You will later push a TimelineSegment
  //to this array. If the variable isn't initialized, Angular will throw an error.
  timelineSegments: TimelineSegment[] = [];

  ngxPointInit(): void {
    //The Point constructor takes _size: string, _color: string, _borderRadius: string
    this.startpoint = new Point('40px', '#B10CC8', '30px');
    this.endpoint = new Point('40px', '#B10CC8', '30px');
  }

  ngxTimelineThicknessInit(): void {
    this.timelineThickness = '10px';
  }
  ngxTimelineSegmentsInit(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    timelineSegment.timelineProperties.setColor('#FFDC00');
    this.timelineSegments.push(timelineSegment);
  }

  addEvent(): void {
    let timelineSegment: TimelineSegment = new TimelineSegment();
    timelineSegment.getEvent().setText('This event was added');
    timelineSegment.getEvent().setSide('left');
    let point: Point = new Point('20px', 'red', '30px');
    timelineSegment.setPoint(point);
    let line: Line = new Line();
    line.setStyle('dashed');
    timelineSegment.setLine(line);
    //Push timelineSegment to timelineSegments
    this.timelineSegments.push(timelineSegment);
  }
}
