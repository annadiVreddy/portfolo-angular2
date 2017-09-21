import { Component } from '@angular/core';
import { DataService } from './product-list.service';


@Component({
    selector: 'pm-product',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent{
pageTitle : string = "Product List";
title : string;

products: any[] = [
];

constructor (private _dataService : DataService){
}

ngOnInit() {
    this.title = this._dataService.getData();
}

}