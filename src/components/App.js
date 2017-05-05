import React from 'react';
import citation from './citation';
import { render } from 'react-dom';
import citations from '../citations';

class App extends React.Component{
    state = {}
    componentWillMount(){
        this.genererCitation();
    }
    genererCitation = event => {
        // On transforme les citations en Array
        const keyArray = Object.keys(citations)
        // Une citation au hasard
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)]
        if(this.state.citation === citations[randomKey].citation){
            this.genererCitation(event)
            return
        }
        this.setState(citations[randomKey])
    }
    render(){
        return(
            <div>
                <Citation />
                <button onClick={e => this.genererCitation(e)}>Une autre citation!</button>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
);

export default App