import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

import {Item} from '../models/item.model';

@Injectable()

export class ItemService {

  constructor(private http: HttpClient) {

  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(environment.api + '/' + id);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(environment.api);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(environment.api, item);
  }

  deleteItem(id: number): Observable<Item> {
    const url = environment.api + '/' + id;
    return this.http.delete<Item>(url);
  }

  editItem(id: number, title): Observable<Item> {
      return this.http.patch<Item>(environment.api + '/' + id, title);
  }

  changeItem(id, status): Observable<Item> {
    return this.http.patch<Item>(environment.api + '/' + id, status);
  }
}
