import React, { useState, useContext } from 'react';
import AppContext from './context';

function Main() {
  const [isOpenModel, setIsOpenModel] = useState(false);

  const {
    score,
    bestScore,
    images,
    clickedImages,
    incrementScore,
    updateBestScore,
    orderImagesRandomly,
    markImageAsClicked,
    resetScore,
  } = useContext(AppContext);

  const checkIfClicked = (id) => {
    if (clickedImages.indexOf(id) >= 0) {
      return true;
    }
    return false;
  };

  const handleClick = (id) => {
    const isClicked = checkIfClicked(id);
    if (isClicked) {
      setIsOpenModel(true);
      return;
    }
    markImageAsClicked(id);
    if (score >= bestScore) {
      updateBestScore();
    }

    incrementScore();
    orderImagesRandomly();
  };

  const replay = () => {
    setIsOpenModel(false);
    resetScore();
  };

  if (!isOpenModel) {
    return (
      <main>
        <div className='gallerie'>
          {images.map((obj) => {
            const { id, image } = obj;
            return (
              <img
                key={id}
                src={image}
                alt='barbie'
                onClick={() => handleClick(id)}
              />
            );
          })}
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className='gallerie'>
        {images.map((obj) => {
          const { id, image } = obj;
          return (
            <img
              key={id}
              src={image}
              alt='barbie'
              onClick={() => handleClick(id)}
            />
          );
        })}
      </div>
      <div className='model'>
        <button className='btn-remove' onClick={replay}>
          X
        </button>
        <h2>Score: {score}</h2>
        {score === 25 && <h2>You are a hero of Memory Card</h2>}
        <p>Congratulation! click replay to play again</p>
        <button className='btn btn-center' onClick={replay}>
          replay
        </button>
      </div>
    </main>
  );
}

export default Main;
