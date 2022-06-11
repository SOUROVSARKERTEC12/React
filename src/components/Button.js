import React from 'react';

class Button extends React.Component{
    render() {
        const {change} = this.props
        return(
            <button type="button" onClick={change}>Click Here</button>
        );
    }
}

export default Button;