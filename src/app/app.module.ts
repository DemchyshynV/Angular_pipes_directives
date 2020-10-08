import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AdderPipe } from './adder.pipe';
import { BoldDirective } from './bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdderPipe,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
