import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { TopTabComponent } from './top-tab/top-tab.component';
import { ChannelsComponent } from './channels/channels.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UpperNavComponent,
    TopTabComponent,
    ChannelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
