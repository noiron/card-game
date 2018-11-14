import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import App from './App';
import HeroModel from './model/hero-model';
import MonsterModel from './model/monster-model';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import decks from './decks';
import gameState from './model/game-state-model';

export const hero = new HeroModel({ life: 20, armor: 0, mana: 10 });
export const monster = new MonsterModel({ life: 20, armor: 0, mana: 10 });

ReactDOM.render(
  <DragDropContextProvider backend={HTML5Backend}>
    <App
      hero={hero}
      monster={monster}
      decks={decks}
      gameState={gameState}
    />
  </DragDropContextProvider>,
  document.getElementById('root')
);

registerServiceWorker();
