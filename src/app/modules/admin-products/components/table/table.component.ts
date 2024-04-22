import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';

import {TableModule} from "primeng/table"
import { Column } from '../../../../shared/models/column.interface';
import { CommonModule } from '@angular/common';
import { ProductInventory, Status } from '../../../../shared/models/product.interface';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ CommonModule, FormsModule,DropdownModule,TableModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableComponent implements OnInit {
  @Input() optStatus: Status[]=[]
  @Input() data!: ProductInventory[];
  @Input() cols!:Column[];
  @Input() type!:string;
  ngOnInit() {
}

  ChangeProductStatus(item: any){
    console.log(item);
    
  }
}
