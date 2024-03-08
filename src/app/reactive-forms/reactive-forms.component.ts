import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{

  myForm: FormGroup |any

  constructor() {}

  ngOnInit(): void {
      this.myForm = new FormGroup(
        {
          uname: new FormControl('User'),
          email: new FormControl('')
        }
      )
  }

  onSubmit(){
    this.myForm.reset();
  }
}
