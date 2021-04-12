import React from 'react';
import {Link,Redirect} from 'react-router-dom';
//import {questionData} from "./questions";
import 'intro.js/introjs.css';
import {Steps,Hints} from 'intro.js-react';
import introJs from 'intro.js';
const steps = [
  {
    element: '.selector1',
    intro: 'test 1',
    position: 'right',
    tooltipClass: 'myTooltipClass',
    highlightClass: 'myHighlightClass',
  },
  {
    element: '.selector2',
    intro: 'test 2',
  },
  {
    element: '.selector3',
    intro: 'test 3',
  },
];

var score=[];
const btnStyle={
  width: "200px",
  backgroundColor: "#0a1429",
  boxShadow: "2px 2px 10px",
  color: "white",
}
const listElementStyle={
  margin: "20px 20px 20px 20px",
}
const QboxStyle={
  boxShadow: "2px 2px 10px",
  backgroundColor: "white"
}
const optNoStyle={
  margin: "0px 10px 0px",
  fontSize: "15px"
}
const QNoStyle={
  margin: "10px 10px",
  fontSize: "20px",
  backgroundColor: " #9c33ff",
  padding: "5px 5px",
  color: "white",
  border: "2px solid white"
}
const timerStyle={
  fontFamily:"Orbitron,sans-serif",
  width: "300px",
  marginTop:"10px",
  boxShadow:"2px 2px 15px",
  backgroundColor: "white"

}
class CNTest extends React.Component{
  constructor(props){
    super(props);
    this.state={
      countMin: 30,
      countSec: 59,
      questionData: this.props.location.state.questionData
    }
  }
  
  componentDidMount(){
    if(window.innerWidth>800)
    {
    introJs().setOptions({
      steps: [
      {
        element: document.querySelector('.card-demo-text'),
        intro: "Quiz consists of 10 questions which you need to solve in 30 minutes",
        position: 'top'
      },
      {
        element: document.querySelector('.border'),
        intro: 'Timer count down 30 minutes and test will automatically end when timer reaches zero',
        position: 'left'
      },
      {
        element: document.querySelector('.intro'),
        intro: 'You can navigate through questions using this pannel',
        position: 'bottom'
      },
      {
        element: document.querySelector('.card-demo'),
        intro: 'Test analysis will be generated when you finishes the test or timer ends the test',
        position: 'top'
      }]
    }).start();
  }
   for(var i=0;i<10;i++)
      score[i]=3;
   this.secInterval=setInterval(()=>{
     this.setState({
       countSec: this.state.countSec-1
     })
   },1000)
   this.minInterval=setInterval(()=>{
     this.setState({
       countMin:this.state.countMin-1,
       countSec: 59
     })
   },60000)
  }
  componentWillUnmount(){
    clearInterval(this.secInterval);
    clearInterval(this.minInterval);
  }

  handleClick=(res,ans,key,opt)=>event=>{
    event.preventDefault();
    
    console.log(key)
    console.log(res===ans)
    if(res===ans)
      score[key]=2;
    else
      score[key]=0;
    
    var op1=document.getElementById(`${key}opt1`)
    var op2=document.getElementById(`${key}opt2`)
    var op3=document.getElementById(`${key}opt3`)
    var op4=document.getElementById(`${key}opt4`)
    if(opt===1)
    {
      op1.style.backgroundColor="#00e64d";
      op2.style.backgroundColor=" #9c33ff";
      op3.style.backgroundColor=" #9c33ff";
      op4.style.backgroundColor=" #9c33ff";
    }
      if(opt===2)
      {
      op1.style.backgroundColor=" #9c33ff";
      op2.style.backgroundColor="#00e64d";
      op3.style.backgroundColor=" #9c33ff";
      op4.style.backgroundColor=" #9c33ff";
      }
      if(opt===3)
      {
        op1.style.backgroundColor=" #9c33ff";
        op2.style.backgroundColor=" #9c33ff";
      op3.style.backgroundColor="#00e64d";
      op4.style.backgroundColor=" #9c33ff";
      }
      if(opt===4)
      {
        op1.style.backgroundColor=" #9c33ff";
        op2.style.backgroundColor=" #9c33ff";
        op3.style.backgroundColor=" #9c33ff";
      op4.style.backgroundColor="#00e64d";
      }
  }
  

 
  
  render(){
    if(this.state.countMin===0)
    {
      return <Redirect to={{
        pathname: "/Result",
        state: {result: score}
      }}/>
    }
  return (
    <div className="App" style={{backgroundColor: "#7887dd"}}>
      
      <div class="container" style={{backgroundColor: "#7887dd"}}>
        <div className="row">
      <div className="col-md-2" >
        <h3 className="fixed-top text-danger border rounded" style={timerStyle} >Time Left:  <span className="text-success">{this.state.countMin} : {this.state.countSec}</span></h3>
      </div>
      <div className="col-md-8 text-center" style={{padding:"20px 20px"}}>
    
          {
            this.state.questionData.map((q,key)=>(
              <div className="jumbotron border border-danger" style={QboxStyle} id={q.id}>
                <h2 className="lead badge badge-danger" style={{margin:  "20px 0px 20px 0px",fontSize:"20px"}}>Question {q.id}</h2>
                <div className="" style={{fontFamily: "sans-serif",fontSize:"20px",color: "black"}}>{q.quest}</div>
                <ul className="list-inline">
                  <li style={listElementStyle} className="list-inline-item"><span className="badge" style={optNoStyle}>1</span><button style={btnStyle} id={`${key}opt1`} className="btn" value={q.id} onClick={this.handleClick(q.opt1,q.ans,key,1)}>{q.opt1}</button></li>
                  <li style={listElementStyle} className="list-inline-item"><span className="badge" style={optNoStyle}>2</span><button style={btnStyle} id={`${key}opt2`} className="btn" value={q.id} onClick={this.handleClick(q.opt2,q.ans,key,2)}>{q.opt2}</button></li>
                </ul>
                <ul className="list-inline">
                  <li style={listElementStyle} className="list-inline-item"><span className="badge" style={optNoStyle}>3</span><button style={btnStyle} id={`${key}opt3`} className="btn" value={q.id} onClick={this.handleClick(q.opt3,q.ans,key,3)}>{q.opt3}</button></li>
                  <li style={listElementStyle} className="list-inline-item"><span className="badge" style={optNoStyle}>4</span><button style={btnStyle}  id={`${key}opt4`} className="btn" value={q.id} onClick={this.handleClick(q.opt4,q.ans,key,4)}>{q.opt4}</button></li>
                 
                </ul>
               <div className="text-center">
                 {q.id!==1 && <a className="btn btn-primary" href={`#${q.id-1}`} style={{width: "100px",marginTop:"20px",boxShadow:"1px 1px 10px",fontSize:"15px",marginRight:"10px"}}>Previous</a>}
                 {q.id!==10 && <a className="btn btn-secondary" href={`#${q.id+1}`} style={{width: "100px",marginTop:"20px",boxShadow:"1px 1px 10px",fontSize:"15px",marginLeft:"10px"}}>Next</a>}
               </div>
              </div>
            ))
            
          }
         
          
      </div>
      <div className="col-md-2 border rounded text-center" style={{padding: "10px 10px",marginTop:"30px",height: "50%",position: "fixed",marginLeft:"65em",boxShadow: "2px 2px 10px"}}>
        <h2 className="lead" style={{color:"white"}}>Questions</h2>
      <ul className="list-inline intro">
                  <a href="#1"><li className="list-inline-item"><span className="badge" style={QNoStyle}>1</span></li></a>
                  <a href="#2"><li className="list-inline-item"><span className="badge" style={QNoStyle}>2</span></li></a>
                  <a href="#3"><li className="list-inline-item"><span className="badge" style={QNoStyle}>3</span></li></a>
      </ul>
      <ul className="list-inline">
                  <a href="#4"><li className="list-inline-item"><span className="badge" style={QNoStyle}>4</span></li></a>
                  <a href="#5"><li className="list-inline-item"><span className="badge" style={QNoStyle}>5</span></li></a>
                  <a href="#6"><li className="list-inline-item"><span className="badge" style={QNoStyle}>6</span></li></a>
      </ul>
      <ul className="list-inline">
                  <a href="#7"><li className="list-inline-item"><span className="badge" style={QNoStyle}>7</span></li></a>
                  <a href="#8"><li className="list-inline-item"><span className="badge" style={QNoStyle}>8</span></li></a>
                  <a href="#9"><li className="list-inline-item"><span className="badge" style={QNoStyle}>9</span></li></a>
      </ul>
      </div>
      </div>
      <div className="row text-center">
        <div className="col-md-5"></div>
      <div className="text-center">
          <Link to={{pathname: "/Result",state: {result: score}}} className="btn btn-success" style={{width: "200px",marginTop:"10px",marginBottom:"10px"}} onClick={this.handleSubmit}>Finish</Link>
          </div>
      </div>
      </div>
    </div>
  );
}
}

export default CNTest;
