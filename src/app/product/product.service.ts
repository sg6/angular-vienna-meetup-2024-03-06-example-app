import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  readonly API_URL = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
  ) { }

  async getAllProducts(): Promise<Product[]> {
    try {
      const products = await firstValueFrom(this.http.get<Product[]>(this.API_URL + 'products'));
      return products;
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  async getProductDetails(productId: string): Promise<Product> {
    try {
      const product = await firstValueFrom(this.http.get<Product>(this.API_URL + 'products/' + productId));
      return product;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
