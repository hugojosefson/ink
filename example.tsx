import React, {useState, useEffect} from 'https://cdn.skypack.dev/react';
import {render, Text} from './mod.ts';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((previousCounter: number) => previousCounter + 1);
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return <Text color="green">{counter} tests passed</Text>;
};

render(<Counter />);
