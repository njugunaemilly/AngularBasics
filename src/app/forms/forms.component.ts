import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  constructor(private router: Router){}

  ngOnInit(): void {}

    goToTemplateDriven(){
      this.router.navigate(['template-driven'])
    }

    goToModelDriven() {
      this.router.navigate(['model-driven']);
    }
  }