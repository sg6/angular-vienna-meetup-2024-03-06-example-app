import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../../interfaces/product.interface';
import { firstValueFrom } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  routeId: string = '';

  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.routeId = params['id'];
        this.getProductDetails();
      });
  }

  async getProductDetails() {
    try {
      const product = await this.productService.getProductDetails(this.routeId);
      this.product = product
    } catch(error) {
      console.error(error);
    }
  }

}
