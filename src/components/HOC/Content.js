import React, { useContext } from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../contexts/themeContext';

export default function Content() {
    const context = useContext(ThemeContext);
    const{theme,switchTheme} = context
    return (
        <div>
            <h1>This is Content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter count={counter}
                                  incrementCount={incrementCount}
                                  theme={theme}
                                  switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}