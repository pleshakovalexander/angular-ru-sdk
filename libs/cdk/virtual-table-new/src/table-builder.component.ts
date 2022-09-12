import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { defer, map, Observable, startWith } from 'rxjs';

import { TableColumnComponent } from './components/table-column/table-column.component';

@Component({
    selector: 'table-builder',
    templateUrl: './table-builder.component.html',
    styleUrls: ['./table-builder.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableBuilderComponent {
    private columns$: Observable<TableColumnComponent[]> = defer(
        (): Observable<TableColumnComponent[]> => this.columns.changes
    ).pipe(
        startWith(null),
        map((): TableColumnComponent[] => this.columns.toArray())
    );

    @ContentChildren(TableColumnComponent) public columns!: QueryList<TableColumnComponent>;
    @Input() public data: any[] = [];

    public pageEvent!: PageEvent;

    public computedColumns$: Observable<TableColumnComponent[]> = this.columns$.pipe(
        map((columns: TableColumnComponent[]): TableColumnComponent[] => [
            ...columns
                .reduce(
                    (
                        computedColumns: Map<string, TableColumnComponent>,
                        column: TableColumnComponent
                    ): Map<string, TableColumnComponent> => {
                        computedColumns.set(column.key, column);

                        return computedColumns;
                    },
                    new Map()
                )
                .values()
        ])
    );

    public get keysOfDataSource(): string[] {
        return Object.keys(this.data[0]) ?? [];
    }
}
