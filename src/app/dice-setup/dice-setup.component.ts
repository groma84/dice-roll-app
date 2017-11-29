import { Component, OnInit } from '@angular/core';
import { DiceRollerService } from '../dice-roller.service';

@Component({
  selector: 'app-dice-setup',
  templateUrl: './dice-setup.component.html',
  styleUrls: ['./dice-setup.component.scss']
})
export class DiceSetupComponent implements OnInit {
  diceRollerService: DiceRollerService;
  initialDice = 6;

  constructor(diceRollerService: DiceRollerService) {
    this.diceRollerService = diceRollerService;
  }

  ngOnInit() {}

  onSubmit(form) {
    const num = form.value.dicetype;
    if (num > 0 && num <= 6) {
      this.diceRollerService.triggerDiceRoll(num);
    }
  }
}
