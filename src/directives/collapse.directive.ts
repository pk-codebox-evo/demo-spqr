import {Directive, EventEmitter} from "@angular/core";

@Directive({
  selector: '[collapse]'
})
export class CollapseDirective {
  
  collapse = new EventEmitter<boolean>();
  skipClick:boolean;
  expanded:boolean;
  
  constructor() {}
  
  toggle() {
  }
}
