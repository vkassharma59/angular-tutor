import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { CockpitComponent } from './input-output/cockpit/cockpit.component';
import { ServerElementComponent } from './input-output/server-element/server-element.component';
import { LocalRefrencesComponent } from './local-refrences/local-refrences.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './game-control/even/even.component';
import { OddComponent } from './game-control/odd/odd.component';
import { GameComponent } from './game-control/game/game.component';
import { ServiceTutorComponent } from './service-tutor/service-tutor.component';

import { BasicHighlightText } from './basic-heighlight-directive/basic-heighlight.directive';
import { CustomStructuralDirectiveDirective } from './custom-structural-directive/custom-structural-directive.directive';
import { DropDownDirectiveDirective } from './shared/drop-down-directive.directive';
import { AccountService } from './shared/account.service';
import { LoggingService } from './shared/logging.service';
import { NewAccountComponent } from './service-tutor/new-account/new-account.component';
import { AccountComponent } from './service-tutor/account/account.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    InputOutputComponent,
    CockpitComponent,
    ServerElementComponent,
    LocalRefrencesComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    GameComponent,
    BasicHighlightText,
    CustomStructuralDirectiveDirective,
    DropDownDirectiveDirective,
    ServiceTutorComponent,
    NewAccountComponent,
    AccountComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
