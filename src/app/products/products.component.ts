import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  

  products = products;

  constructor(private roter:Router,private route:ActivatedRoute){
    
  }

  ngOnInit(){
    
   /* this.route.queryParamMap.subscribe(params=>{
     let id = params.get('id');
    });
    let id = +this.route.snapshot.paramMap.get('id')!; */

    this.route.queryParamMap.subscribe(params=>{
      console.log(params);
    })  

    let page = this.route.snapshot.queryParamMap.get('page');
    console.log(page);
  }

  loadProducts(){
    this.roter.navigate(['/products'],{queryParams:{page:1}});
  }

}
