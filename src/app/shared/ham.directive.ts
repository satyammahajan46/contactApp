import { Directive, Input, HostListener, HostBinding, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";



@Directive({
    selector: "[appHam]"
})

export class Ham implements OnInit{
    @Input() dataToggle: string;
    @Input() dataTarget: ElementRef;
    isOpen: boolean;
    constructor(elRef: ElementRef, private render: Renderer2) {
        this.isOpen = false;
        this.dataTarget = elRef;
        this.dataToggle = "required";
    }
    ngOnInit(){
        
    }
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        if(this.isOpen){
            //this.dataTarget.style.setProperty('display', 'block', 'important')
            this.render.setStyle(this.dataTarget, 'display', 'block');
        }
        else{
            this.render.setStyle(this.dataTarget, 'display', 'none');
        }
    }
   


}