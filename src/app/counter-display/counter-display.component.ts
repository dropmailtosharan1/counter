import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent {
constructor(private store:Store<{counter:{counter:number}}>){

}
counter!:any;
ngOnInit(){
  this.store.select('counter').subscribe(data=>{
this.counter=data.counter;
  })
}
}
