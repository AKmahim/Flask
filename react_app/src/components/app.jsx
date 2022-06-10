import React from 'react';
import Profile from './profile/index';
import Skills from './profile/skills';

class App extends React.Component{

    render(){
        return(
            <div className="App">
                <Profile/>
                <div style={{marginTop:'30px',marginBottom:'30px'}}>
                    <h3 style={{marginBottom:'20px '}}>List of Programmers</h3>
                    <p>Mr.X</p>
                    <Skills/>
                    <p>Mr.Y</p>
                    <Skills/>
                </div>
            </div>
        )
    }

}

export default App 