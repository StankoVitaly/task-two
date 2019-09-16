import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ItemService} from '../../services/item.service';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  loader = false;
  items: Item[] = [];

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.getListItems();
  }

  getListItems() {
    this.itemService.getItems()
      .subscribe(data => {
        this.items = data;
        data.sort((a, b) => {
          if (a.date > b.date) {
            return 1;
          }
          if (a.date < b.date) {
            return -1;
          }
          return 0;
        });
      });
  }

  change(item) {
    this.itemService.changeItem(item.id, {status: item.status = !item.status})
      .subscribe(data => {
        console.log(data);
      });
  }

  delete(item) {
    this.itemService.deleteItem(item.id)
    .subscribe(result => {
      this.getListItems();
    });
  }

}
