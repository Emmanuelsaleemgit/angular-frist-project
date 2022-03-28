import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstlye]'
})
export class CustomstlyeDirective {

  constructor(private el :ElementRef) {
    el.nativeElement.style.color="red"
    // el.nativeElement.style.color="blue"
    // el.nativeElement.style.color="green"
   }

}
