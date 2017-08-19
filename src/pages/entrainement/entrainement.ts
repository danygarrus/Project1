import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Timer } from '../timer/timer';
import { State } from '../timer/state';


@Component({
  selector: 'page-entrainement',
  templateUrl: 'entrainement.html'
})
export class EntrainementPage {
  
  private _btnPlay: string = 'Démarrer';
  private _timer: Timer = new Timer();
  private _state: State = new State();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  play() {
    this._timer.start();
    this._state.setPlay();
    this._btnPlay = 'Continuer';
}
stop() {
    this._timer.stop();
    this._state.setStop();
}
pause() {
  this._timer.stop();
  this._state.setStop();
}
backward() {
    this._timer.reset();
    this._state.setBackward();
    this._btnPlay = 'Démarrer';
}

  

 /*  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(EntrainementPage, {
      item: item
    });
  } */
}
