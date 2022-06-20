import React from 'react';
import ClickCounter from './components/HOC/ClickCounter';
import Counter from './components/HOC/Counter';
import Section from './components/HOC/Section';
import ThemeContext from './components/contexts/themeContext';


export default class App extends React.Component {
    state = {
        theme: 'dark',
    };

    switchTheme = () => {
        this.setState(({ theme }) => {
            if (theme === 'dark') {
                return {
                    theme: 'light',
                };
            }
            return {
                theme: 'dark',
            };
        });
    };

    render() {
        const { theme } = this.state;
        return <div className='app'>
            <Counter>
                {(counter, incrementCount) => (
                    <ClickCounter count={counter} incrementCount=
                        {incrementCount} />
                )}
            </Counter>
            <ThemeContext.Provider value={{theme, switchTheme : this.switchTheme }}><Section theme={theme} /></ThemeContext.Provider>
        </div>;
    }
}


