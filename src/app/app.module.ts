import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxTimelineVerticalModule } from 'ngx-timeline-vertical';
import { GoogleChartsModule } from 'angular-google-charts';

import { MymapComponent } from './mymap/mymap.component';
import { TimelineComponent } from './timeline/timeline.component';

import { HistogramComponent } from './histogram/histogram.component';

@NgModule({
  declarations: [AppComponent, MymapComponent, TimelineComponent, HistogramComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxTimelineVerticalModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
