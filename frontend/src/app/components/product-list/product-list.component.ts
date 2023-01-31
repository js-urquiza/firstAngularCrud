import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: any = []; //Si no pongo any no funciona

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      res => {
        this.products = res.products; //Asigno la respuesta con los datos a la propiedad productos
        console.log(this.products = res.products);
      },
      err => console.log(err)
    );
  }

}
