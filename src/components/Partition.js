import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const Partition = ({ id, color, onRemove }) => {
    const [partitions, setPartitions] = useState([]);
    const [currentColor, setCurrentColor] = useState(color || getRandomColor());

    const handleSplit = (direction) => {
        const newColor = getRandomColor();
        setPartitions([
            ...partitions,
            {
                id: uuidv4(),
                direction,
                color: newColor,
            },
        ]);
    };

    const handleRemove = (idToRemove) => {
        setPartitions(partitions.filter(({ id }) => id !== idToRemove));
    };

    return (
        <div className="relative flex flex-col border" style={{ backgroundColor: currentColor }}>
            <div className="flex justify-between p-2">
                <button className="bg-blue-500 text-white px-2 py-1 m-1" onClick={() => handleSplit('V')}>V</button>
                <button className="bg-green-500 text-white px-2 py-1 m-1" onClick={() => handleSplit('H')}>H</button>
                {onRemove && <button className="bg-red-500 text-white px-2 py-1 m-1" onClick={() => onRemove(id)}>–</button>}
            </div>
            <div className={`flex ${partitions.length > 0 ? (partitions[0].direction === 'V' ? 'flex-row' : 'flex-col') : ''} flex-grow`}>
                {partitions.map(({ id, direction, color }) => (
                    <Partition key={id} id={id} color={color} onRemove={handleRemove} />
                ))}
            </div>
        </div>
    );
};

export default Partition;
