import React from 'react';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User'
// import Text from './components/composition/Text';
// import Emoji from './components/composition/Emoji';
// import Bracket from './components/composition/Bracket';
//import Text from './components/inheritance/Text';
//import Calculator from './components/Calculator';
//import Form from './components/Form';

function App() {
    return <div className='app'>
        <ClickCounter />
        <HoverCounter />
        <User name = "SOUROV" />
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
