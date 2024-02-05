import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products} from '../../products';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  selectedProduct : any;

  constructor(private route:ActivatedRoute) {
    
  }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id')!;
    this.selectedProduct = products.find(i => i.id === id);
    

    
  }

}
