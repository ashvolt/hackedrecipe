import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AppService } from './app.service'
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule, HttpClientModule, MaterialModule ],
  declarations: [ AppComponent, PageNotFoundComponent, RecipeListComponent, RecipeDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }

