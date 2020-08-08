import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  searchByRecipe:string = ""
  categories = []
  data = [   
    {
      "id":0,
      "name":"Uthappizza",
      "image":"https://i.imgur.com/tDnjTXf.jpg",
      "category":"mains",
      "label":"Hot",
      "price":"4.99",
      "description":"A unique combination of Indian Uthappam (pancake) and Italian pizza"
   
},
   {
      "id":1,
      "name":"Zucchipakoda",
      "image":"https://i.imgur.com/xkUElXq.jpg",
      "category":"appetizer",
      "label":"",
      "price":"1.99",
      "description":"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
   
},
   {
      "id":2,
      "name":"Vadonut",
      "image":"https://i.imgur.com/anUAlqF.jpg",
      "category":"appetizer",
      "label":"New",
      "price":"1.99",
      "description":"A quintessential ConFusion experience, is it a vada or is it a donut?"
   
},
   {
      "id":3,
      "name":"ElaiCheese Cake",
      "image":"https://i.imgur.com/c5hBTEW.jpg",
      "category":"dessert",
      "label":"",
      "price":"2.99",
      "description":"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
   
},
   {
      "id":4,
      "name":"Guntur chillies",
      "image":"https://i.imgur.com/Vc9JIXP.jpg",
      "category":"appetizer",
      "label":"Spicy",
      "price":"0.99",
      "description":"Assorted chillies from Guntur"
   
},
   {
      "id":5,
      "name":"Buffalo Paneer",
      "image":"https://i.imgur.com/pH2tkgk.jpg",
      "category":"appetizer",
      "label":"",
      "price":"5.99",
      "description":"A special type of Paneer made from Buffalo milk"
   
},
   {
      "id":6,
      "name":"Cherry Tomatoes",
      "image":"https://i.imgur.com/fRy8hjE.jpg",
      "category":"clone",
      "label":"clone",
      "price":"9.99",
      "description":"clone of cherry and tomato"
   
},
   {
      "id":7,
      "name":"Goat Milk",
      "image":"https://i.imgur.com/zFGPhrI.jpg",
      "category":"weird",
      "label":"weird",
      "price":"1.99",
      "description":"Medicinal Goat Milk"
   
},
   {
      "id":8,
      "name":"Rose breasted Grosbeak chicken",
      "image":"https://i.imgur.com/RYsqgoo.jpg",
      "category":"appetizer",
      "label":"New",
      "price":"7.99",
      "description":"Roasted rare bird"
   
},
   {
      "id":9,
      "name":"Toenail Zingy",
      "image":"https://i.imgur.com/IpG3YOT.jpg",
      "category":"appetizer",
      "label":"weird",
      "price":"0.99",
      "description":"Cooked Toenails of various animals"
   
}
]
  path = "http://starlord.hackerearth.com/recipe"
  constructor(private apiService : AppService, private router: Router) { 
       this.data.forEach(function (element) {
  element["favourite"] = false;
});
  }

  ngOnInit() {
    this.categories = this.data.map(value => value.category)
    this.categories = [...new Set(this.categories)]
    // this.apiService.get(this.path).subscribe (
    //   result => console.log(result)
    // );
    console.log(this.data)
 
  }

  filterItemsOfType(type){
    return this.data.filter(x => x.category == type);
}

addFavourite(type) {
  type.favourite = !type
}

viewDetails(id) {
    this.router.navigate(['/recipt-details/'+id]);
}

}