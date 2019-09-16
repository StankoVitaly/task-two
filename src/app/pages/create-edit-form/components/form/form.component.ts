import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Item} from '../../../../models/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  createEditForm: FormGroup;

  @Output() Submit = new EventEmitter<Item>();
  @Input() item: Item = new Item();

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.createEditForm = this.fb.group({
      title: new FormControl(this.item.title, Validators.required),
      status: new FormControl(false),
      date: new FormControl(new Date())
    });
  }

  onSubmit() {
    this.Submit.emit(this.createEditForm.value);
    this.createEditForm.reset();
  }

}
