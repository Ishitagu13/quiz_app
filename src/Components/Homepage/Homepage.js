import React,{Component} from 'react';
import './Homepage.css'
import Subjects from '../Subjects/Subjects.js';
import {questionData} from "./questions";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Form from '../form/Form.js';

class Homepage extends Component
{
    render()
    {
        const subjects=[
            {subjectName:"Computer Network" ,duration:"40 min",questionCount:10,icon:'fas fa-network-wired',url: '/ComputerNetworksQuiz',questions: questionData.CNQuiz},
            {subjectName:"Operating System" ,duration:"30 min",questionCount:10,icon:'fab fa-windows',url: '/ComputerNetworksQuiz',questions: questionData.OSQuiz},
            {subjectName:"JavaScript Basics" ,duration:"40 min",questionCount:10,icon:'fab fa-js',url: '/ComputerNetworksQuiz',questions: questionData.JSQuiz}
        ];
        return(

            <div className="background box-overlay container-fluid" data-aos="zoom-in-up" data-aos-delay='200' >
                <nav className="navbar navbar-expand-lg navbar-light" data-aos="zoom-in" data-aos-delay='500' data-aos-duration="">
                    <p className="navbar-brand " style={{paddingTop:'10px',color:'aliceblue'}}>
                        <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" data-target="#dropdownmenu" style={{marginRight:'10px'}}>
                            <i className="fas fa-bars " style={{fontSize:'24 px'}}></i>
                            <ul className="dropdown-menu" id="dropdownmenu">
                                <h5 className="dropdown-header">Subject Available</h5>
                                <li className="dropdown-item">Computer Network</li>
                                <li className="dropdown-item">Operating System</li>
                                <li className="dropdown-item">JavaScript</li>
                                <li className="dropdown-divider"></li>
                                <h5 className="dropdown-header">Useful links</h5>
                                <li className="dropdown-item">About Us</li>
                            </ul>
                        </button>
                        Our Services
                    </p>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                        <i className="fas fa-bars " style={{fontSize:'24 px', float:'left'}}></i>
                    </button>
                    <div className="collapse navbar-collapse flex flex-row-reverse " id="navb">
                        <ul className="navbar-nav  ">
                            <li className="nav-item"> 
                                <Link className="nav-link" to="#"><button className="btn"><span><i className="far fa-file"></i></span>My Quizzes</button></Link>
                            </li>
                            <li className="nav-item"> 
                                <Link className="nav-link" to="/login"><button className="btn"><span><i className="fas fa-user-plus"></i></span>Register/Login</button></Link>
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" href="#"><button className="btn"><span><i className="fas fa-id-badge"></i></span>About Us</button></a>
                            </li>
                        </ul>
                    </div>
                </nav> 
                <BrowserRouter>
                <Switch>
                
                <Route path="/login"><Form /> </Route>

                </Switch>
                </BrowserRouter>
                

                
               
                               

                <div className="container">
                    <div className="row">
                        {
                            subjects.map((elements,index)=>
                            <Subjects key={elements.subjectName} data={elements} index={index}/>
                            )
                        }
                    </div>
                </div>
                



                <footer className='footer' id="myfooter"data-aos="zoom-in" data-aos-duration="800">
                <div className="text-center p-3 container-fluid">
                    © Designed and Developed in Team By 
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Ayush Mishra 18103215</li> 
                        <li className="list-group-item">Harsh Shukla 18103252</li>
                        <li className="list-group-item">Ishita Gupta 18103254</li>
                    </ul>
                </div>
                </footer>





            </div>
        );
    }
}
export default Homepage;