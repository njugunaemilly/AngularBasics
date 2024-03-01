import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName = 'Emilly';
  isUnchanged = false;
  image = "assets/cat.jpg"

  onClick(){
    console.log("Thank you for visiting this webpage")
  }

  userOutput = ''
}
