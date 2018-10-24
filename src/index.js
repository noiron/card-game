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

const hero = new HeroModel({ life: 50, armor: 0 });
const boss = new MonsterModel({ life: 50, armor: 0 });

ReactDOM.render(
  <DragDropContextProvider backend={HTML5Backend}>
    <App
      hero={hero}
      boss={boss}
      decks={decks}
      gameState={gameState}
    />
  </DragDropContextProvider>,
  document.getElementById('root')
);

registerServiceWorker();
