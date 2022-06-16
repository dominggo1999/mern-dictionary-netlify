import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Definitions from './layout/Definitions/Definitions.jsx';
import useWordStore from './store/useWordStore.jsx';
import { AppWrapper } from './App.style.jsx';
import Sentences from './layout/Sentences/Sentences.jsx';

const App = () => {
  const changeWord = useWordStore((state) => state.changeWord);
  const { pathname } = useLocation();

  useEffect(() => {
    changeWord(pathname.replace('/', ''));
  }, [pathname]);

  return (
    <AppWrapper>
      <Definitions />
      <Sentences />
    </AppWrapper>
  );
};

export default App;
