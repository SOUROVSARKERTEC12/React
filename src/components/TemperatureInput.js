import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
export default class TemperatureInput extends React.Component {
    state = {
        temperature: '',
    };
    onTemperatureChange = (e) => {
        this.setState({ temperature: e.target.value });
    };

    render() {
        const { temperature } = this.state;
        const {scale} = this.props;
        return (
            <fieldset>
                <legend> Enter temperature in {scaleName[scale]} :</legend>
                <input type='text' value={temperature} onChange={this.onTemperatureChange} />
            </fieldset>
        );
    }
}