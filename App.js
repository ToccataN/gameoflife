import React, {Component} from 'react';
import Square from './components/board.js';
import Button from './components/buttons.js';

const spaceArr = ()=> {
    const arr =[];
    for (var i=0; i<40; i++){
     arr.push(Math.floor(Math.random()*(400-0)));
    }
    return arr;
};

var checker = function(arr, x) {
    var count =0,
        
        narr=[arr[x-20], (arr[x-21] && (x%20!=0)), (arr[x-19] && (x%19!=0) ),arr[x-1] , 
        arr[x+1] , arr[x+20], (arr[x+21]&&(x%19!=0)) , (arr[x+19] && (x%20!=0)) ];
        
        narr.map(function(val, i){
            if(val == true){
                if(x===209){
                
                }
                count+=1;
            }
        });
        if (x===209){
           
        }
    return count;

};

var death= function(arr, i){
     var count= checker(arr, i);
     if(count===3){
        return true;
        
      } else if( count >=4 || count <=1){
        return false;
     } 
};

var newarray = function(narr){ 
            var arr=[];
            narr.map(function(val, i){
              if(val ===true && death(narr, i)===false){
                arr.splice(i, 0, !val);
              }
              else if (val ===false && death(narr, i)===true){
                arr.splice(i, 0, !val);
             
              } else {
                arr.splice(i, 0, narr[i]);
              }
             
           });
          
            return arr;
 };
 
 const clearArray = (arr) =>{
   var a = [];
   arr.map(function(val){
       a.push(val=false);
   });
   return a;
 };
 
 var newrandarray= function(arr){
          var space = spaceArr();
          space.map(function(value){ arr.splice(value, 1, true)});
          return arr;
};



class App extends Component{
   
    constructor(){
       
        super();
        this.state={
            array : new Array(400).fill(false),
            running: '',
            counter: 0,
            inter: 1000
        } ;
        
        this.run = this.run.bind(this);
        this.click= this.click.bind(this);
        this.clear= this.clear.bind(this);
        this.reset= this.reset.bind(this);
        this.stop = this.stop.bind(this); 
       
    }
    
    componentWillMount(){
      var th = this;
      
      this.setState({array: newrandarray(this.state.array)})
    }
    
    click(i, live) {  
       var newarray = function(arr, x, l){
           arr.splice(x, 1, !l);
           return arr;
       };
       
       this.setState({array: newarray(this.state.array, i, live)}, function(){
          console.log(this.state.array[i], i, live); 
       });
    }
    
    run(){
        var th= this; 
    
      
        this.setState({running:  setInterval(function(){
              th.setState({
                  array: newarray(th.state.array),
                  counter: th.state.counter+=1
              }); 
              
             }, th.state.inter)})
          
    }
    
    stop(){
        clearInterval(this.state.running)
    }
    
    clear(){
        this.setState({array: clearArray(this.state.array), counter: 0})
    }
    
    reset(){
        this.setState({array: newrandarray(clearArray(this.state.array))});
    }
    
    
    
    render(){
       
        var th = this;
        return (
            <div>
              <div className='backboard'>
                <Button clicker1={this.run} clicker2={this.clear} clicker3={this.reset} 
                clicker4={this.stop} counter={this.state.counter}/>
                <div className='board'>
               
                 {this.state.array.map(function(live, index){
                   
                    return (<Square key={index} living={live} clicker={th.click.bind(this, index, live)}/>);
                 })
                     
                  }
                </div>
                
              </div>
            </div>
            )
    }
}

export default App;