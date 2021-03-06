import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

/*控制器*/
export class ProductComponent implements OnInit {

  /*在控制器内声明数组*/
  private products: Product[];

  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  private imgUrl  = 'http://placehold.it/320x150';

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .subscribe(
      value => this.keyword = value
    );
  }

  /*组件的生命周期钩子，在组件实例化之后调用一次,用来实例化数据*/
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}


