import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {StoreModule} from "@ngrx/store";
import {counterReducer} from "../reducer/counter.reducer";
import { CounterComponent } from './counter/counter.component';
import { T1Component } from './t1/t1.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    T1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
