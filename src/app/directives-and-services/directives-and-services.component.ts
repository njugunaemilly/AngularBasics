import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-and-services',
  templateUrl: './directives-and-services.component.html',
  styleUrls: ['./directives-and-services.component.css']
})
export class DirectivesAndServicesComponent {
  isReturningUser = false;

  greeting(status: boolean){
    this.isReturningUser = status;
  }

  users: string[] = ['Dylan', 'Fiona', 'Vivian', 'Alden'];

}
