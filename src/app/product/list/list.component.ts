import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [JsonPipe, CurrencyPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
  ) {}

  async ngOnInit() {
      this.products = await this.productService.getAllProducts();
  }

}
