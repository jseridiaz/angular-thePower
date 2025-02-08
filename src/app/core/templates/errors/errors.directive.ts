import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appErrors]',
})
export class ErrorsDirective {
  // @Input() getData?: FormGroup;

  @HostBinding('style.color') public changeColor: string = 'crimson';
  @HostBinding('style.outline-color') public changeBorder: string = 'crimsons';
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
}
