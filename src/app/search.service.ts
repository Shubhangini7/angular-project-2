import { Injectable } from '@angular/core';
import { COMPANY } from './sample-data';
import { VEGETABLES } from './sample-data';
import { CURRENCY } from './sample-data';
import { Stock } from './stock';

@Injectable()
export class SearchService {
  private company: Stock[] = COMPANY;
  private vegitable: Stock[] = VEGETABLES;
  private currancy: Stock[] = CURRENCY;

  constructor() {

 }

}
