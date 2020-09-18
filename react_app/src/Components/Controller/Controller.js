import React, {Component} from 'react'

class Controller extends Component{
    constructor(props){
        super(props)

        this.state = {
            start:true,
            pause:false,
            lap:false,
            reset:false
        }
    }
    getStart(){
        setInterval(()=>{
            let min = this.state.time.min
            let sec = this.state.time.sec
            let mili = this.state.time.mili

            if (mili >= 10){
                sec = sec +1
                mili = 0
            }
            if(sec >= 60){
                min = min +1
                sec = 0
            }
            this.setState({
                ...this.state,
                time:{
                    min,
                    sec,
                    mili:mili+1
                }
            }
            )

        },100)
    }

    startHandler(){
        this.setState({
            ...this.state,
            start:false,
            pause:true,
            lap:true
        })
        this.props.start()
    }
    pauseHandler(){
        this.setState({
            ...this.state,
            start:true,
            pause:false,
            lap:false,
            reset:true 
        })
    }
    lapHandler(){

    }
    resetHandler(){
        this.setState({
            ...this.state,
            start:true,
            pause:false,
            lap:false,
            reset:false 
        })
    }

    getController(){
        let output = null
        
        if (this.state.start && !this.state.reset){
            output = (
                <div>
                    <button 
                    className="btn btn-success btn-lg px-5"
                    onClick={event => this.startHandler()}
                    >Start
                    </button>
                </div>
            )
        }
        else if(this.state.pause && this.state.lap){
            output = (
                <div>
                    <button 
                    className="btn btn-primary btn-lg px-5 ml-5"
                    onClick={event => this.pauseHandler()}
                    >Pause
                    </button>
                    <button 
                    className="btn btn-warning btn-lg px-5 ml-5"
                    onClick={event => this.lapHandler()}
                    >Lap
                    </button>
                </div>
            )
        }
        else if(this.state.start && this.state.reset){
            output = (
                <div>
                    <button 
                    className="btn btn-success btn-lg px-5 ml-5"
                    onClick={event => this.startHandler()}
                    >Start
                    </button>
                    <button 
                    className="btn btn-warning btn-lg px-5 ml-5"
                    onClick={event => this.resetHandler()}
                    >Reset
                    </button>
                </div>
            )
        }



        return output
    }

    render(){
        return (
            this.getController()
        )
    }
}

export default Controller 