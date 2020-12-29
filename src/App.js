import { Button } from 'react-bootstrap';
import React from 'react';
import './App.css';
import img from './image.jpeg'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      person:{
        fullName:"Paulo Coelho",
        bio:"Paulo Coelho was born on August 24, 1947. Coelho wrote the best-selling novel, The Alchemist, which sold 35 million copies and is the most translated book in the world by a living author.",
        imgSrc:img,
        profession:"Actor,Novelist"
      },
      show:false,
      time:0
    }
  }
  componentDidMount(){
    setInterval(()=>{(this.state.show) ? this.setState({time:this.state.time+1}):this.setState({time:0})},1000)
  };
  toggleShow=()=>this.setState({show:!this.state.show})          
  render(){
    return(
      <div className="App">  
        <div>   
          <button className="btn" onClick={this.toggleShow}>Click Me!</button>
          <div style={{width:250,marginLeft:10}}>
            time since the component has mounted (second): {this.state.time}
          </div> 
        </div>  
        {(this.state.show)?
        <div className="box"> 
          <div className="line">
            <img src={this.state.person.imgSrc} alt="phot" className="img" />
            <div className="parti">
              <div className="row">
                <h1>Full Name:</h1>
                <div>{this.state.person.fullName}</div>
              </div>
              <div className="row">
                <h1>Profession:</h1>
                <div>{this.state.person.profession}</div>
              </div>
              <Button  onClick={()=>alert(this.state.person.fullName)}>
              alert name of profile </Button>
            </div> 
          </div>
          <div className="row">    
            <h1>Bio:</h1>
            <div>{this.state.person.bio}</div>
          </div>       
        </div> : null }
      </div>
    );      
  }
}
export default App;
