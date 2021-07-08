import React from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Content from './components/Content';

function App() {
    return (
        <div className="wrapper clear">
            <Header/>
            <Content/>
            <Drawer/>
        </div>
    );
}

export default App;
