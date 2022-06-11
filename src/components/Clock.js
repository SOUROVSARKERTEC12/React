import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };


    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    handleClick =(locale)=> {
        this.setState({
            locale
        });
    }

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className='heading'>
                    <span className='text'> Chill Bro For You baby {date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick.bind('en-US')}> Click Here</Button>
            </div>
        );
    }
}

export default Clock;