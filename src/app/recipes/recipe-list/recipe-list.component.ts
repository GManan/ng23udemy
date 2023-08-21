import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is the test recipe',
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/63O2DBTTTEI6VKN5T6FVSMYA2A.jpg&w=860')
  ];

  constructor() { }

  ngOnInit(): void {
    this.recipes.push(new Recipe('recipe n2', 'another description', 'https://assets.epicurious.com/photos/5be1c1bf587ad42d4b37c134/1:1/w_3948,h_3948,c_limit/Vegetarian-Skillet-Stuffed-Shells-01112018.jpg'))
    this.recipes.push(new Recipe('recipe n2', 'another description', 'https://assets.epicurious.com/photos/5be1c1bf587ad42d4b37c134/1:1/w_3948,h_3948,c_limit/Vegetarian-Skillet-Stuffed-Shells-01112018.jpg'))
  }

}
