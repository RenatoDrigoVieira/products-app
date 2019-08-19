import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  @ViewChild(MatTable,{static:false}) dataTable: MatTable<any>

  prodColumns:string[] = ["Id","Name","Price","Description","Department"]
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts()
    this.productService.onNewProduct.subscribe((p) =>{
      this.dataTable.renderRows();
    })
  }

}
