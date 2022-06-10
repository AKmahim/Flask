import React from 'react';
import './profile.style.css';
import Bio from './bio';
import Skills from './skills';
import Links from './links';



class Profile extends React.Component{
    render(){
        return(
            <div className='Container'>
                <Bio/>
                <Skills/>
                <Links/>
            </div>
        )
    }
}

export default Profile;