import React from 'react';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
import User from './components/HOC/User';
import Counter from './components/HOC/Counter';
// import Text from './components/composition/Text';
// import Emoji from './components/composition/Emoji';
// import Bracket from './components/composition/Bracket';
//import Text from './components/inheritance/Text';
//import Calculator from './components/Calculator';
//import Form from './components/Form';

function App() {
    return <div className='app'>
        {/* <ClickCounter /> */}
        {/* <HoverCounter /> */}
        <Counter
            render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />} />
        <Counter
            render={(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} />} />
        {/* <User render= {(isLoggedIn)=> (isLoggedIn ?'SOUROV':'Guest')} /> */}
    </div>;
    // return (
    //     <Emoji>
    //         {({ addEmoji }) => (
    //             <Bracket>
    //                 {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
    //             </Bracket>)}
    //     </Emoji>
    // );
    //return <Calculator/>
    // return <div>
    //     {/* <Form /> */}
    // </div>;
}

export default App;
