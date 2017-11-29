import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1,"第一个商品",1.99,3.5,"磨刀霍霍...",["电子产品","硬件设备"]),
    new Product(2,"第二个商品",3.99,2.5,"磨刀霍霍...",["图书产品","硬件设备"]),
    new Product(3,"第三个商品",10.99,3.5,"磨刀霍霍...",["电子产品","硬件设备"]),
    new Product(4,"第四个商品",12.99,4.5,"磨刀霍霍...",["电子产品","硬件设备"]),
    new Product(5,"第五个商品",9.99,1.5,"磨刀霍霍...",["电子产品","硬件设备"]),
    new Product(6,"第六个商品",8.99,2.5,"磨刀霍霍...",["电子产品","硬件设备"]),
  ];
  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-12 22:11:23', '张三', 3, '东西不错'),
    new Comment(2, 1, '2017-02-12 22:11:23', '李四', 4, '东西是不错'),
    new Comment(3, 3, '2017-02-12 22:11:23', '玩儿', 2, '东西挺不错'),
    new Comment(4, 5, '2017-02-12 22:11:23', '小米', 5, '东西还不错'),
    new Comment(5, 4, '2017-02-12 22:11:23', '小米', 5, '东西还不错'),
    new Comment(6, 6, '2017-02-12 22:11:23', '小米', 5, '东西还不错'),
    new Comment(7, 7, '2017-02-12 22:11:23', '小米', 5, '东西还不错'),
  ]

  constructor() { }
  // 获取所有的商品信息
  getProducts(): Product[] {
    return this.products;
  }
  // 根据商品id，找到该产品 返回
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  // 根据商品id 返回商品的评价信息
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

/*定义对象 商品类*/
export class Product {
  /*构造函数*/
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public  rating: number,
    public  desc: string,
    public  categories: Array<string>) {
  }
}
// 评论类
export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string
  ) { }
}
