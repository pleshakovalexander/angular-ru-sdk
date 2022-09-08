import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[tableHeaderCell]'
})
export class TableHeaderCellDirective {
    constructor(public templateRef: TemplateRef<unknown>) {}
}
