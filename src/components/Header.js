import React, { useContext } from 'react';
import AppContext from './context';
const Header = () => {
  const { score, bestScore } = useContext(AppContext);
  return (
    <header className='header'>
      <h1>memory card</h1>
      <div className='scoresInfo'>
        <h3>
          score: <span>{score}</span>
        </h3>
        <h3>
          best score: <span>{bestScore}</span>
        </h3>
      </div>
    </header>
  );
};
export default Header;
