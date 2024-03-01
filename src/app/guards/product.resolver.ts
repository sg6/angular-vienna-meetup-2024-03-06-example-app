import { ResolveFn, Router } from '@angular/router';
import { ProductService } from '../product/product.service';
import { inject } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export const productResolver: ResolveFn<boolean | Product> = async (route, state) => {
  const router = inject(Router);
  const routeId = route.paramMap.get('id')!;
  const productService = inject(ProductService);
  const id = parseInt(routeId);
  const modalService = inject(NgbModal);
  
  if (id < 0 || id > 9999) {
    router.navigateByUrl('product/list');
    modalService.open(` The product ID is invalid. Please choose a product from the list. `);  
    return false;
  }

  return await productService.getProductDetails(routeId)
  .then(product => {
    if (product) {
      return product;
    }
    
    modalService.open(` ... `);  
    router.navigateByUrl('product/list');
    return false;
  })
  .catch(error => {
    modalService.open(` No product found... `);
    router.navigateByUrl('product/list');
    return false;
  });
};
