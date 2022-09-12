import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { TableColumnComponent } from './components/table-column/table-column.component';
import { TableBodyCellDirective } from './directives/table-body-cell.directive';
import { TableHeaderCellDirective } from './directives/table-header-cell.directive';
import { TableBuilderComponent } from './table-builder.component';

@NgModule({
    imports: [CommonModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatPaginatorModule],
    exports: [TableBuilderComponent, TableColumnComponent, TableHeaderCellDirective, TableBodyCellDirective],
    declarations: [TableBuilderComponent, TableColumnComponent, TableBodyCellDirective, TableHeaderCellDirective]
})
export class TableBuilderModuleNew {
    public static forRoot(): ModuleWithProviders<TableBuilderModuleNew> {
        return { ngModule: TableBuilderModuleNew, providers: [] };
    }
}
