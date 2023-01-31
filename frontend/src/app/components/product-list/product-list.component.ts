import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      res => {console.log(res)},
      err => console.log(err)
    );
  }

}
