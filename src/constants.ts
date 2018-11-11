export type PlayerType = 'hero' | 'monster';
export interface IPlayer {
  hero: PlayerType,
  monster: PlayerType,
}

export type GameStatusType = 'running' | 'win' | 'lose';

// 当前属于谁的回合
export const game_turn : IPlayer = {
  hero: 'hero',
  monster: 'monster',
}

export const card_target : IPlayer = {
  hero: 'hero',
  monster: 'monster',
}

export const card_source : IPlayer = {
  hero: 'hero',
  monster: 'monster',
}

export const run_status = {
  running: 'running',
  win: 'win',
  lose: 'lose',
}

export const item_types = {
  card: 'card',
}

export const init_cards_num = {
  hero: 3,
  monster: 1,
}
