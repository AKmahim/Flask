import React, { Component } from 'react'


class Title extends Component {

    constructor(props){
        super(props)

        this.state = {
            title: 'STOP WATCH',
            isInput : false
        }
        
    }

    editHandler(){
        this.setState(
            {
                ...this.state,
                isInput: true
            }
        )
    }

    inputChange(event){
        this.setState(
            {
                ...this.state,
                title: event.target.value
            }
        )
    }

    keyPresshandler(event){
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                isInput:false
            })
        }
    }

    render(){

        let output = null
        
        if (this.state.isInput){
            output = (
                <div className="Titlle">
                    <input 
                    className="form-control" 
                    onChange = { (event)=> this.inputChange(event) }
                    onKeyPress = { (event =>this.keyPresshandler(event)) }
                    type="text" 
                    value={ this.state.title } />
                </div>
            )
        }
        else{
            output = (
                <div className="d-flex">
                    <h1 className="display-3 text-info"> {this.state.title} </h1>
                    <span onClick={ ()=> this.editHandler() } className="ml-auto">
                    <i className ="fas fa-edit"></i>
                    </span>
                </div>
            )
        }

        return (
            <div> {output} </div>
        );
    }
}


export default Title;