import React from 'react';
import SearchBar from '../../common/SearchBar/SearchBar.jsx';
import { DefinitionsWrapper, Sticky } from './Definitions.style.jsx';
import Indonesian from '../Indonesian/Indonesian.jsx';
import English from '../English/English.jsx';

const Definitions = () => {
  return (

    <Sticky>
      <DefinitionsWrapper>
        <SearchBar />
        <Indonesian />
        <English />
      </DefinitionsWrapper>
    </Sticky>

  );
};

export default Definitions;
