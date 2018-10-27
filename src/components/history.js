import React from 'react';
import styled from 'styled-components';
import { card_source } from '../constants';

class History extends React.Component {
  generateLog(card) {
    let sourceText = '';
    let sourceClassName = '';
    if (card.source === card_source.hero) {
      sourceText = '你';
      sourceClassName = 'hero';
    } else if (card.source === card_source.monster) {
      sourceText = '敌人';
      sourceClassName = 'monster';
    }

    let actionText = '';
    if (card.attack > 0) {
      actionText = '造成了 ' + card.attack + ' 点伤害';
    } else if (card.armor > 0) {
      actionText = '增加了 ' + card.armor + ' 点护甲';
    }

    return (
      <Log key={card.id}>
        {card.playedTime.toLocaleString().slice(11) + '：'}
        <span className={`source ${sourceClassName}`}>
          {`${sourceText}`}
        </span>
        <span>
          {` 使用了 ${card.name} 牌，${actionText}`}
        </span>
      </Log>
    );
  }

  render() {
    const { usedCards, closeHistory } = this.props;

    return (
      <Wrapper>
        <Inner>
          <div className="close" onClick={closeHistory}>
            ✘
          </div>
          {[...usedCards].reverse().map(card => {
            return this.generateLog(card);
          })}
        </Inner>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  position: fixed;
  top: 0;
  left: 0;
`;

const Inner = styled.section`
  border: 1px solid #000;
  width: 800px;
  height: 400px;
  overflow-y: auto;
  position: relative;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;

  .close {
    font-size: 60px;
    position: absolute;
    right: 20%;
    top: 10%;
  }
`;

const Log = styled.p`
  white-space: pre;

  .hero {
    color: green;
  }

  .monster {
    color: red;
  }
`;

export default History;
