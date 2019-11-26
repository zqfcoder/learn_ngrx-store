import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/index";
import {Store,select} from "@ngrx/store";
import {Increment,Decrement,Reset} from '../../actions/counter.action'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$:Observable<number>

  constructor(private store:Store<{count:number}>) {
    this.count$  = store.pipe(select('count'));
  }

  ngOnInit() {
    console.log(this.store);
  }

  increment(){
    this.store.dispatch(new Increment());
  }

  decrement(){
    this.store.dispatch(new Decrement());
  }

  reset(){
    this.store.dispatch(new Reset());
  }
}
