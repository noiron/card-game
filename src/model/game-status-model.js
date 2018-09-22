/**
 * 记录游戏的中的各种状态信息，如当前是谁的回合，游戏的输赢状态
 */
import { observable } from 'mobx';
import { game_turn } from '../constants';

class GameStatus {
  @observable currentTurn;


  constructor(info) {
    this.currentTurn = info.currentTurn; 
  }
}

const gameStatus = new GameStatus({
  currentTurn: game_turn.hero
});

export default gameStatus;
