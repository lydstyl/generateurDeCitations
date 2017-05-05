// Code React
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <div>
            <p>
                Ma citation
                <span>- Auteur</span>
            </p>
            <button>Une autre citation!</button>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
);