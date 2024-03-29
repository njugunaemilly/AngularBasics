import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FirstComponentComponent } from './first-component/first-component.component';
import { DirectivesAndServicesComponent } from './directives-and-services/directives-and-services.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DirectivesAndServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
