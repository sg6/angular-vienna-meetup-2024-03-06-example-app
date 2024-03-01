import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Product } from '../../interfaces/product.interface';
import { RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [JsonPipe, CurrencyPipe, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  products: Product[] = [];
  userRole?: string;

  constructor(
    private productService: ProductService,
    private userService: UserService,
  ) {}

  async ngOnInit() {
      this.products = await this.productService.
        getAllProducts();

      this.userService.user$
      .subscribe(user =>
        this.userRole = user.role
      );
  }

}
