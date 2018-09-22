/**
 * 记录游戏的中的各种状态信息，如当前是谁的回合，游戏的输赢状态
 */
import { observable, computed } from 'mobx';
import { game_turn, run_status } from '../constants';

class GameState {
  @observable currentTurn;
  @observable runStatus;
  @observable effects;

  @computed get isGameOver() {
    return this.runStatus === run_status.win 
      || this.runStatus === run_status.lose;
  }


  constructor(info) {
    this.currentTurn = info.currentTurn;
    this.runStatus = run_status.running;
    this.effects = [];
  }
}

const gameState = new GameState({
  currentTurn: game_turn.hero
});

export default gameState;
