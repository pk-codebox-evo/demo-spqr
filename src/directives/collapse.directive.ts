import {EventEmitter, Output, Directive, HostListener} from "@angular/core";
@Directive({
    selector: '[collapse]',
    exportAs: 'Collapse'
})
export class CollapseDirective {

    @Output() collapse = new EventEmitter<boolean>();
    skipClick:boolean;
    expanded:boolean;

    constructor() {}

    toggle() {
        this.expanded = !this.expanded;
        this.collapse.emit(this.expanded);
        this.skipClick = true;
    }

    @HostListener('document:click')
    onClick() {
        if (!this.skipClick) {
            this.expanded = false;
            this.collapse.emit(false);
        }
        this.skipClick = false;
    }
}