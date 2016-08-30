import React, {Component} from 'react';

class Button extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
              <ul className="button-list">
                <li><button className="btn" onClick={this.props.clicker1}>Run</button></li>
                <li><button className="btn" onClick={this.props.clicker4}>Stop</button></li>
                <li><button className="btn" onClick={this.props.clicker2}>Clear</button></li>
                <li><button className="btn" onClick={this.props.clicker3}>Reset</button></li>
                <li><div className="generation"><strong>Generations: <div className="box">{this.props.counter}</div></strong></div></li>
              </ul>
            </div>
            )
    }
}

export default Button;