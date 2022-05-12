import { Component } from '@angular/core';
import { Fruit } from './fruit';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  fruitList:Fruit[] = [

    new Fruit('Mango', 'https://image.ibb.co/eEmOYA/apple.jpg', 'Mangoes are juicy stone fruit (drupe) from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.'),

    new Fruit('Apple', 'https://image.ibb.co/cXU5fq/mango.jpg', 'An apple is a sweet, edible fruit produced by an apple tree (Malus pumila). Apple trees are cultivated worldwide, and are the most widely grown species in the genus Malus.'),

    new Fruit('Pineapple', 'https://image.ibb.co/km3RmV/pineapple.jpg', 'The pineapple (Ananas comosus) is a tropical plant with an edible multiple fruit consisting of coalesced berries, also called pineapples and the most economically significant plant in the family Bromeliaceae.')

  ];
}
