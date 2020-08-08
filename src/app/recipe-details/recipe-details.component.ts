import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
recipeItem = { "id":"",
      "name":"",
      "image":"",
      "category":"",
      "label":"",
      "price":"",
      "description":""}
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getBehaviorView().subscribe(v => {
      this.recipeItem = v;
})
  }
  goBack() {
     window.history.back();
  }
}