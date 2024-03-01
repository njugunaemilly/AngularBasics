import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input()
  editor = 'Neo'

  @Output()
  sendMessageEmitter = new EventEmitter();


  sendToParent(e: any){
    this.sendMessageEmitter.emit(e.target.value);
  }
}
