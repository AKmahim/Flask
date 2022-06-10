import React from 'react';


class Inputs extends React.Component{

    state = {
        name:'',
        country:'',
        bio:'',
        birthday:''
    };

    handleChange = ()=>{
        
    }


    render(){
        return(
            <div>
                <input className="form-control my-2" type="text" name="name" placeholder="Mahim" />
                <select name="country" className="form-control"> 
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Sri lanka">Sri lanka</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="China">China</option>
                </select>
                <textarea name="bio" placeholder="Tell Me about yourself" className="form-control my-2"></textarea>
                <input type='date' name="birthday" />


            </div>
        )
    }
}


export default Inputs;