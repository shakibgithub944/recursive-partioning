import React from 'react';
import Partition from './components/Partition';
import AlphabetTiles from './components/AlphabetTiles';

const App = () => {
  return (
    <div className="h-screen p-4">
      <h1 className="text-2xl mb-4">Recursive Partitioning</h1>
      <Partition />
      <h1 className="text-2xl my-4">Alphabet Tile Interaction</h1>
      <AlphabetTiles />
    </div>
  );
};

export default App;
