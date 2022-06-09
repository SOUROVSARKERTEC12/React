import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//const element = React.createElement('h1',null,'Hello, World!')
class Clock {
    print() {
        return (
            <h1 className='heading'>
                <span className='text'> Hello World !{new Date().toLocaleTimeString()}</span>
            </h1>
        );
    }
}

const ClockCompoent = new Clock();
ReactDOM.render(ClockCompoent.print(),document.getElementById('root'))
