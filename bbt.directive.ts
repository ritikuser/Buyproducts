import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBbt]'
})
export class BbtDirective {

  constructor(private el:ElementRef , private renderer:Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','yellow')
    
   }
   changeBg(color:string){
    this.renderer.setStyle(this.el.nativeElement,'background',color)
  } 
  
  @HostBinding('style.backgroundColor') bgColor ='green'
  @HostBinding('class.myClass') className
  @HostBinding('attr.alt') myTitle 
  @HostListener('click') myClick(){
    this.bgColor='blue'
    this.className = true
    this.myTitle = 'this is test title'
    // alert("clicked")
    // this.renderer.setStyle(this.el.nativeElement,'background','blue')
  }
  @HostListener('mouseover') mymouseOver(){
    // alert("clicked")
    // this.renderer.setStyle(this.el.nativeElement,'background','lightgray')
  }
  @HostListener('mouseout') mymouseOut(){
    // alert("clicked")
    // this.renderer.setStyle(this.el.nativeElement,'background','black')
  }

}
