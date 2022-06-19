import React from 'react';
import ClickCounter from './components/HOC/ClickCounter';
import Counter from './components/HOC/Counter';
import Section from './components/HOC/Section';


export default class App extends React.Component {
    state ={
        theme : 'dark'
    }
    render() {
        const {theme} = this.state;
        return <div className='app'>
            <Counter>
                {(counter, incrementCount) => (
                    <ClickCounter count={counter} incrementCount=
                        {incrementCount} />
                )}
            </Counter>
            <Section theme = {theme}/>
        </div>;
    }
}


