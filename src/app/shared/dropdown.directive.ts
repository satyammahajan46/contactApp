import { Directive, Input, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})

export class DropdownDirective{
    @HostBinding('class.open') isOpen:boolean;
    constructor() {
        this.isOpen = false;
    }
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }


}