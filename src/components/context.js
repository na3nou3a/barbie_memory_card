import React, { useState } from 'react';
import data from '../data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const randomData = () => {
    const unOrderedData = [];
    let r = Math.floor(Math.random() * data.length);
    const l = data.length;
    for (let i = 0; i < l; i++) {
      if (r >= l) {
        r = 0;
      }
      const obj = data[r];
      unOrderedData.push(obj);
      r++;
    }

    return unOrderedData;
  };

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [images, setImages] = useState(data);

  const [clickedImages, setClickedImages] = useState([]);

  const incrementScore = () => {
    return setScore((score) => score + 1);
  };

  const updateBestScore = () => {
    return setBestScore((prev) => prev + 1);
  };

  const resetScore = () => {
    setScore(0);
    setImages(data);
    setClickedImages([]);
  };

  const orderImagesRandomly = () => {
    return setImages(randomData());
  };

  const markImageAsClicked = (id) => {
    const newImages = [...clickedImages, id];
    return setClickedImages(newImages);
  };

  return (
    <AppContext.Provider
      value={{
        score,
        bestScore,
        images,
        clickedImages,
        incrementScore,
        updateBestScore,
        orderImagesRandomly,
        markImageAsClicked,
        resetScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
