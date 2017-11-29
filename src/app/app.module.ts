import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiceSetupComponent } from './dice-setup/dice-setup.component';
import { DiceRollerService } from './dice-roller.service';
import { DiceResultComponent } from './dice-result/dice-result.component';

@NgModule({
  declarations: [AppComponent, DiceSetupComponent, DiceResultComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DiceRollerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
