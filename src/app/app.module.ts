import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MymapComponent } from './mymap/mymap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineComponent } from './timeline/timeline.component';

import { NgxTimelineVerticalModule } from 'ngx-timeline-vertical';

@NgModule({
  declarations: [AppComponent, MymapComponent, TimelineComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxTimelineVerticalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
