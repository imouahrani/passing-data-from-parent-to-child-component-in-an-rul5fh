import { Component, OnInit, Input} from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() fruit: Fruit;

  constructor() { }

  ngOnInit() {
  }

}