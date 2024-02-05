import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products} from '../../products';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  selectedProduct: any;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null && idParam !== undefined) {
        let id = +idParam;
        this.selectedProduct = products.find(product => product.id === id);
      } else {
        console.error("ID parametresi null veya undefined.");
      }
    });
  }
  
  
  
  
  
  
}
