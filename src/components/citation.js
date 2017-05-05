import React from 'react'

class Citation extends React.Component{
    render(){
        return(
            <p>
                {this.state.citation}
                <span>- {this.state.auteur}</span>
            </p>
        )
    }
}

export default Citation;