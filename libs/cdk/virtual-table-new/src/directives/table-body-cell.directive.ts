import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[tableBodyCell]'
})
export class TableBodyCellDirective {
    constructor(public templateRef: TemplateRef<unknown>) {}
}
