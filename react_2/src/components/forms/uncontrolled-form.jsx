import React from 'react';

class UnControlledForm extends React.Component{

    render(){
        return(
            <div>
                <input 
                className='form-control'
                type="text" 
                name="name" 
                placeholder="John"/>

                <input 
                className='form-control'
                type="email" 
                name="email" placeholder="john123@gmail.com"/>

                <input 
                className='form-control'
                type="password" 
                name="password" 
                placeholder="*****"/> 

                <button type="submit">Submit</button>
            </div>
        );

    }

}

export default UnControlledForm;