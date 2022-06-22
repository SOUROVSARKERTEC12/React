import React from 'react';
//import Todo from './components/TodoClass';
import Todos from './components/Todo';

export default class App extends React.Component {
    render(){
        return (
            <div className="app">
                <Todos />
            </div>
        )
    }
}


