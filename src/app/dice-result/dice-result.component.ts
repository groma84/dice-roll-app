import { Component, OnInit } from '@angular/core';
import { DiceRollerService } from '../dice-roller.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';

@Component({
  selector: 'app-dice-result',
  templateUrl: './dice-result.component.html',
  styleUrls: ['./dice-result.component.scss']
})
export class DiceResultComponent implements OnInit {
  diceRollerService: DiceRollerService;
  lastRoll: number[];

  constructor(diceRollerService: DiceRollerService) {
    this.diceRollerService = diceRollerService;

    this.lastRoll = [];
  }

  ngOnInit() {
    this.diceRollerService.rolls.subscribe(roll => {
      this.lastRoll = [];

      Observable.range(1, roll).subscribe(n => this.lastRoll.push(n));
    });
  }
}
