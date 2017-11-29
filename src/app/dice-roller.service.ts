import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DiceRollerService {
  private _dice: Subject<number>;

  constructor() {
    this._dice = new Subject<number>();
  }

  triggerDiceRoll(sides: number) {
    const rng = Observable.create(observer => {
      observer.next(Math.random());
    });

    const numbers$ = rng
      .map(x => x * sides)
      .map(x => Math.floor(x))
      .map(x => x + 1)
      .map(x => Math.min(x, sides))
      .subscribe(n => this._dice.next(n));
  }

  get rolls(): Observable<number> {
    return this._dice.asObservable();
  }
}
