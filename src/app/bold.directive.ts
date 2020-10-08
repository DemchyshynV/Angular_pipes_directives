import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective implements OnInit {
  @Input()
  appBold: string;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    // console.log(this.elementRef.nativeElement);
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.color = this.appBold;
  }

}
