import React, { useState } from 'react';

const AlphabetTiles = () => {
    const [outputString, setOutputString] = useState('');

    const handleTileClick = (letter) => {
        let newString = outputString + letter;
        const regex = /(.)\1{2,}/g;
        newString = newString.replace(regex, (match) => '_'.repeat(match.length));
        setOutputString(newString);
    };

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="p-4">
            <div className="grid grid-cols-6 gap-2 mb-4">
                {alphabet.map((letter) => (
                    <button
                        key={letter}
                        className="bg-blue-500 text-white p-2 rounded"
                        onClick={() => handleTileClick(letter)}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <div id="outputString" className="p-2 border">
                {outputString}
            </div>
        </div>
    );
};

export default AlphabetTiles;
