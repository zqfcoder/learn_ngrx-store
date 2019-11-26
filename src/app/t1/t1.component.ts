import {Component, OnInit} from '@angular/core';
import {Store, select} from "@ngrx/store";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.css']
})
export class T1Component implements OnInit {
  counter$: Observable<number>

  constructor(private store: Store<{ count: number }>) {//todo(为啥这里这么写?????)
    let temp = select('count');
    this.counter$ = this.store.pipe(temp);//todo(写法不理解....)
    console.log(this.counter$);
    console.log(temp);
  }

  ngOnInit() {

  }

}
