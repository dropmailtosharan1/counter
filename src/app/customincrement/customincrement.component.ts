import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from '../shared/store/counter.actions';

@Component({
  selector: 'app-customincrement',
  templateUrl: './customincrement.component.html',
  styleUrls: ['./customincrement.component.css']
})
export class CustomincrementComponent {
  customvalue!:number;
  constructor(private store:Store<{counter:{counter:number}}>){

  }
  onIncrement(){
    this.store.dispatch(customincrement({value:+this.customvalue}))
  }
}
