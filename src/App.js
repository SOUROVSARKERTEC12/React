import React from 'react';
import MyComponentClass from './components/MyComponentClass';
import MyComponent from './components/MyComponent';


export default class App extends React.Component {
    render(){
        return (
            <div className="app">
                <MyComponent/>
            </div>
        )
    }
}


