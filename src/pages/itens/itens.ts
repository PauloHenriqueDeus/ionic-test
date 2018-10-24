import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { AddItemPage } from '../add-item/add-item';

@Component({
  selector: 'page-itens',
  templateUrl: 'itens.html'
})
export class ItensPage {

  currentItems:Item[] = [];

  constructor(public navCtrl: NavController) {
    this.currentItems.push(new Item("Item 0"));
    this.currentItems.push(new Item("Item 1"));
  }
  goToItem(params){
    if (!params) params = {};
    this.navCtrl.push(ItemPage);
  }goToAddItem(params){
    if (!params) params = {};
    this.navCtrl.push(AddItemPage);
  }
}

class Item{

  name:string;

  constructor(name:string) {
    this.name = name;
  }
}
