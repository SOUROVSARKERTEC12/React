import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App'
//import reportWebVitals from './reportWebVitals';
let states = []; // [0: [ value, setter],1....
let stateIndex = -1;

function useState(defaultValue) {
    const index = ++stateIndex;

    if (states[index]) return states[index];

    const setValue = (newValue) => {
        states[index][0] = newValue;
        renderWithSourov();
    };

    const returnArray = [defaultValue, setValue];
    states [index] = returnArray;
    return returnArray;
}

function App() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js')
            ? 'You need JavaScript skill to complete the task. Do you have it?'
            : null;

        setTodo(inputValue);
        setWarning(updatedWarning);
    };

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name='todo' value={todo} onChange={handleInput} />
            </p>
            <hr />
            <h2>{warning || 'Good choice!'}</h2>
        </div>
    );
}

export default App;

function renderWithSourov() {
    stateIndex = -1;
    ReactDOM.render(
        <App />,
        document.getElementById('root'),
    );
}

renderWithSourov();

//reportWebVitals();