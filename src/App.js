import React from 'react';
import { AppProvider } from './components/context';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <>
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
      <Footer />
    </>
  );
};

export default App;
