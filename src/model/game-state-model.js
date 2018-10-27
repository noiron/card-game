/**
 * 记录游戏的中的各种状态信息，如当前是谁的回合，游戏的输赢状态
 */
import { observable, computed, action, autorun } from 'mobx';
import { game_turn, run_status } from '../constants';

class GameState {
  @observable currentTurn;  // 记录是玩家还是敌人的回合
  @observable runStatus;
  @observable effects;
  @observable turnCount; // 记录当前是第几回合
  @observable showHistory = false;

  @computed get isGameOver() {
    return this.runStatus === run_status.win 
      || this.runStatus === run_status.lose;
  }

  constructor(info) {
    this.currentTurn = info.currentTurn;
    this.runStatus = run_status.running;
    this.effects = [];
    this.turnCount = 1;
  }

  @action increaseTurnCount() {
    this.turnCount += 1;
  }
}

const gameState = new GameState({
  currentTurn: game_turn.hero
});

autorun(() => {
  console.log('当前是第' + gameState.turnCount + '回合');
})

// reaction(
//   () => gameState.turnCount,
//   (count, reaction) => {
//       console.log("reaction 3: invoked. counter.count = " + count);
//   }
// );

export default gameState;
