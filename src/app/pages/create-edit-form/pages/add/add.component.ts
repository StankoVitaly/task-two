import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ItemService} from '../../../../services/item.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private itemService: ItemService,
              private router: Router) {
  }

  ngOnInit() {
  }

  SaveAfterCreate(item) {
    this.itemService.addItem(item)
      .subscribe(
        success => {
          this.router.navigate(['/list']);
        },
        error => alert('Something wrong')
      );
  }

}
