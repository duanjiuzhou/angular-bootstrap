import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // list：商品列表  filterField: 过滤字段  keyword：关键字
  transform(list: any[], filterField: string, keyword: string): any {
    if (!filterField || !keyword) {
      return list;
    }
    return list.filter(
      item => {
        let fiedlValue = item[filterField];
        return fiedlValue.indexOf(keyword) >= 0;
      });
  }
}
