import React from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date() }
    }

    componentDidMount() {
        setInterval(()=> this.tick(),1000)
    }

    tick(){
        this.setState({date : new Date(),})
    }

    render() {
        return (
            <h1 className='heading'>
                <span className='text'> Hello World !{this.state.date.
                toLocaleTimeString(this.props.locale)}</span>
            </h1>
        );
    }
}

export default Clock;