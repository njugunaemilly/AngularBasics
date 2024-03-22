import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
  },

  {
    path: 'template-driven',
    component: TemplateDrivenFormsComponent,
  },
 
   {
     path: 'reactive-forms',
     component: ReactiveFormsComponent,
    
   }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
