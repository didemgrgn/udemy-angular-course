import { Directive, ElementRef, HostListener,Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]' //selector: html de kullanıldı
})
export class HighlightDirective {

  //Custom Directive ile DOM daki elementin tüm özelliklerine erişilebilir. 
  //Custom Directive önemli özelliklerinden biriside dışarıdan değişken gönderilebilmesidir.


  //4.örnek

  @Input() highlightColor: string | undefined;

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor=this.highlightColor;
   }


   @HostListener("mouseenter") onMouseEnter(){
    this.el.nativeElement.style.backgroundColor=this.highlightColor;
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.el.nativeElement.style.backgroundColor=this.highlightColor;
 }


   //1.örnek:

   //constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor="orange";
  //}

   //@HostListener("mouseenter") onMouseEnter(){
   //  this.highlight("gray");
   //}

   //@HostListener("mouseleave") onMouseLeave(){
   // this.highlight("pink");
   //}

   private  highlight(color: string){
    this.el.nativeElement.style.backgroundColor=color;
  }

  //2.örnek:

   // @HostListener("mouseenter") onMouseEnter(){
   //    this.makeInvisible(); //mouse enter olduğu zaman kaybolsun
   //  }

   //  @HostListener("mouseleave") onMouseLeave(){
   //   this.makeVisible(); //mouse gittiği zaman geri gelsin
   // }
   
  
   makeVisible(){
     this.el.nativeElement.style="visibility:visible";//mouse gittiği zaman geri gelsin
   }

   makeInvisible(){
     this.el.nativeElement.style="visibility:hidden";//mouse enter olduğu zaman kaybolsun
   }

    //3.örnek:

   //@HostListener("mouseenter") onMouseEnter(){
   // this.makeBigger(); //mouse enter olduğu zaman büyük olsun
  //}

  //@HostListener("mouseleave") onMouseLeave(){
  // this.makeSmaller(); //mouse gittiği zaman küçük olsun
 //}

   makeBigger(){
    this.el.nativeElement.style="font-size:2rem";//mouse gittiği zaman geri gelsin
  }

  makeSmaller(){
    this.el.nativeElement.style="font-size:0.8rem";//mouse enter olduğu zaman kaybolsun
  }

}
