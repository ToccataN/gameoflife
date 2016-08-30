import React, {Component} from 'react';

class Square extends Component{
    constructor(props){
        super(props);
    }
    
    
    
    render(){
        if (this.props.living===false){
            return (<div className='square' onClick={this.props.clicker}></div>)
        } else {
            return (<div className='live'  onClick={this.props.clicker}></div>)
        }
        
    }
}

export default Square;