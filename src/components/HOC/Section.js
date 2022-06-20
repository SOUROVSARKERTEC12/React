import React from 'react';
import Content from './Content';

export default class Section extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        console.log("Section Rerender")
        return (
            <div>
                <h1>This is Section</h1>
                <Content />
            </div>
        );
    }
}