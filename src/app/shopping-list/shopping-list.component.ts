import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  onItemAdded(IngredientData: Ingredient){
    if(IngredientData.name != '' && IngredientData.amount > 0){
      this.ingredients.push(IngredientData);
    }
  }
}
