import React from 'react';
import ClickCounter from './components/HOC/ClickCounter';
import Counter from './components/HOC/Counter';
import Section from './components/HOC/Section';


function App() {
    return <div className='app'>
        <Counter>
            {(counter, incrementCount) => (
                <ClickCounter count={counter} incrementCount=
                    {incrementCount} />
            )}
        </Counter>
        <Section />
    </div>;
}

export default App;
