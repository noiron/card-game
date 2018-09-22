import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeroModel from './model/hero-model';
import MonsterModel from './model/monster-model';
import registerServiceWorker from './registerServiceWorker';

import decks from './decks';
import gameStatus from './model/game-status-model';

const hero = new HeroModel({ life: 20, armor: 0 });
const boss = new MonsterModel({ life: 50, armor: 0 });

ReactDOM.render(
  <App
    hero={hero}
    boss={boss}
    decks={decks}
    gameStatus={gameStatus}
  />,
  document.getElementById('root')
);

registerServiceWorker();
