import { Component, OnInit } from '@angular/core';
import { SearchService } from "../search.service";

@Component({
    selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private searchservice: SearchService) { }

  ngOnInit() {
  }

}
