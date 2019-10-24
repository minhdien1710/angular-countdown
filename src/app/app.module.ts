import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularCountdownComponent } from './angular-countdown/angular-countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularCountdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
