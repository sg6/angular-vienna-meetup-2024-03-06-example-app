import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  productId: string = '';

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.productId = params['id'];
      })
  }

}
