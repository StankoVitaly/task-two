import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ItemService} from '../../../../services/item.service';
import {Item} from '../../../../models/item.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id = 0;
  item: Item;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(param => {
        this.id = param.id;
      });
    this.itemService.getItem(this.id)
      .subscribe( data => {
        this.item = data;
      });
  }

  SaveAfterEdit(item: Item) {
    this.itemService.editItem(this.id, {title: item.title})
      .subscribe(
        success => {
          this.router.navigate(['/list']);
        },
        error => {

        }
      );
  }

}
