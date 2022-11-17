import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: {name: string, discription: string, imagePath: string};
  @Output() recipeSelected = new EventEmitter<{name: string, discription: string, imagePath: string}>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick(recipeEleData: any){
    console.log(recipeEleData)
    this.recipeSelected.emit({
      name: recipeEleData.name,
      discription: recipeEleData.discription,
      imagePath: recipeEleData.imagePath
    });
  }
}
