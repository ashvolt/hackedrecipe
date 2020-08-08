import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';


const routes: Routes = [
  {path: 'recipeList', component: RecipeListComponent},
  {path: '404',  component: PageNotFoundComponent},
  {path: '', redirectTo:'/recipeList', pathMatch: 'full',},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }