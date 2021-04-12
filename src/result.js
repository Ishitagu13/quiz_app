import React from 'react';
import {Link} from 'react-router-dom';


const listElementStyle={
    fontSize: "15px"
}

class Result extends React.Component{
    constructor(props){
        super(props);
        this.state={
            correct: 0,
            wrong: 0,
            left: 0
        }
    }
    componentDidMount(){
        
        const {result}=this.props.location.state;
        console.log(result);
        for(var point=0;point<10;point++)
        {
            console.log(result[point]);
            if(result[point]===0)
                this.setState(prevState=>({
                    wrong: prevState.wrong + 1
                 }))
            else if(result[point]===3)
            this.setState(prevState=>({
                left: prevState.left + 1
             }))
            else if(result[point]===2)
            this.setState(prevState=>({
                correct: prevState.correct + 1
             }))
        }
        // this.props.location.state.result.map(point=>{
        //     console.log(point);
        //     if(point===0)
        //         this.setState({
        //             wrong: this.state.wrong + 1
        //          })
        //     if(point===-1)
        //     this.setState({
        //         left: this.state.left + 1
        //      })
        //     if(point===2)
        //     this.setState({
        //         correct: this.state.correct + 1
        //      })
        // })
    }
    render(){
    return(
        <div className="container">
            <span className="display-4"></span>
            <div className="row jumbotron" style={{backgroundColor: "#7887dd",marginTop: "20px",boxShadow:"2px 2px 10px"}}>
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <span className="lead" style={{fontSize: "50px",color: "white"}}>Your Score</span>
                    <div style={{fontSize: "80px"}}>
                        <span style={{fontFamily: "agency FB",color: "white",textShadow: "1px 1px 10px"}}>{this.state.correct*2/20 * 100} %</span>
                    </div>
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item"><span className="badge badge-success" style={listElementStyle}>Correct : {this.state.correct}</span>
                            <div className="progress" style={{marginTop: "10px"}}>
                                    <div className="progress-bar bg-success" style={{width: `${this.state.correct*2/20*100}%`}}>{this.state.correct*2/20*100}%</div>
                            </div>
                            </li>
                            <li className="list-group-item"><span className="badge badge-danger" style={listElementStyle}>Wrong : {this.state.wrong}</span>
                            <div className="progress" style={{marginTop: "10px"}}>
                                    <div className="progress-bar bg-danger" style={{width: `${this.state.wrong*2/20*100}%`}}>{this.state.wrong*2/20*100}%</div>
                            </div>
                            </li>
                            <li className="list-group-item"><span className="badge badge-warning" style={listElementStyle}>Not Attempted : {this.state.left}</span>
                            <div className="progress" style={{marginTop: "10px"}}>
                                    <div className="progress-bar bg-warning" style={{width: `${this.state.left*2/20*100}%`}}>{this.state.left*2/20*100}%</div>
                            </div>
                            </li>
                        </ul>
                    </div>
                   
                </div>
                
            </div>
            <div className="text-center">
                        <div><Link to="/" className="btn" style={{color: "white",backgroundImage: "linear-gradient(to bottom right,#d6daf5,#5b6bd7)" ,borderRadius: "30px",width:"200px",fontSize:"20px",textShadow:"1px 1px 10px red"}}>Back to Home</Link></div>
                </div>
        </div>
    )
    }
}

export default Result;