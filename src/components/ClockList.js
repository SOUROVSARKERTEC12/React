import Clock from './Clock';
import React from 'react';

export default function ClockList({ quantities = [] }) {
    return (
        <div>
            {quantities.map(() =>
                (<Clock key ={Math.random()}/>))}
        </div>
    );
}
