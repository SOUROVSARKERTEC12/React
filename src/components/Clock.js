import React from 'react';

class Clock extends React.Component{
    render() {
        return (
            <h1 className='heading'>
                <span className='text'> Hello World !{new Date().
                toLocaleTimeString(this.props.locale)}</span>
            </h1>
        );
    }
}

export default Clock;