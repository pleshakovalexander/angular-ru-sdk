import { ChangeDetectionStrategy, Component, ContentChild, Input } from '@angular/core';

import { TableBodyCellDirective } from '../../directives/table-body-cell.directive';
import { TableHeaderCellDirective } from '../../directives/table-header-cell.directive';

@Component({
    selector: 'table-column',
    templateUrl: './table-column.component.html',
    styleUrls: ['./table-column.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableColumnComponent {
    @Input() public key!: string;

    @ContentChild(TableHeaderCellDirective, { static: true })
    public header?: TableHeaderCellDirective;

    @ContentChild(TableBodyCellDirective, { static: true })
    public body?: TableBodyCellDirective;
}
