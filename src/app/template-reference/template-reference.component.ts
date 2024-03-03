import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit  {

  @ViewChild('myInput', {static: true}) myCustomInput: any;

  ngOnInit() {
    this.myCustomInput.nativeElement.focus();
  }

  sendInput(input: any){
    console.log(input.value);
  }
}
