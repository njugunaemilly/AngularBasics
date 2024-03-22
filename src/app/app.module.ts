import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DirectivesAndServicesComponent } from './directives-and-services/directives-and-services.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AngularApiComponent } from './angular-api/angular-api.component';
import {  HttpClientModule } from '@angular/common/http';
import { LifecycleHooksParentComponent } from './lifecycle-hooks-parent/lifecycle-hooks-parent.component';
import { LifecycleHooksChildComponent } from './lifecycle-hooks-child/lifecycle-hooks-child.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { ReversePipePipe } from './reverse-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DirectivesAndServicesComponent,
    FirstComponent,
    SecondComponent,
    ParentComponent,
    ChildComponent,
    TemplateDrivenFormsComponent,
    FormsComponent,
    ReactiveFormsComponent,
    AngularApiComponent,
    LifecycleHooksParentComponent,
    LifecycleHooksChildComponent,
    TemplateReferenceComponent,
    ReversePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
