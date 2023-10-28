import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterbuttonComponent } from './counterbutton/counterbutton.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { counterReducer } from './shared/store/counter.reduce';

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter:counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
