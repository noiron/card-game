export interface PlayerType {
  hero: string,
  monster: string,
}

// 当前属于谁的回合
export const game_turn : PlayerType = {
  hero: 'hero',
  monster: 'monster',
}

export const card_target : PlayerType = {
  hero: 'hero',
  monster: 'monster',
}

export const card_source : PlayerType = {
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
