/**
 * 记录游戏的中的各种状态信息，如当前是谁的回合，游戏的输赢状态
 */
import { observable, computed, action, autorun } from 'mobx';
import { game_turn, run_status, GameStatusType, PlayerType } from '../constants';
import EffectModel from './effect-model';


export interface IGameState {
  currentTurn: PlayerType;
}

export class GameStateModel {
  @observable currentTurn: PlayerType;  // 记录是玩家还是敌人的回合
  @observable runStatus: GameStatusType;
  @observable effects: EffectModel[];
  @observable turnCount: number; // 记录当前是第几回合
  @observable showHistory = false;
  @observable showNextTurnTip = false;

  @computed get isGameOver() {
    return this.runStatus === run_status.win 
      || this.runStatus === run_status.lose;
  }

  constructor(info: IGameState) {
    this.currentTurn = info.currentTurn;
    this.runStatus = run_status.running;
    this.effects = [];
    this.turnCount = 1;
  }

  @action increaseTurnCount() {
    this.turnCount += 1;
  }

  // 切换回合时，浮窗提示
  @action toggleNextTurnTip() {
    this.showNextTurnTip = true;
    setTimeout(() => {
      this.showNextTurnTip = false;
    }, 1500);
  }
}

const gameState = new GameStateModel({
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
