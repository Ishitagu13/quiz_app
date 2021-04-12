import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import CNTest from "./CNTest";
import Homepage from "./Components/Homepage/Homepage";
import Result from './result';
import Form from "./Components/form/Form";



class App extends React.Component{
  

  render()
  {
    return(
        <BrowserRouter>
        <div>
        
              <Switch>
                <Route exact path="/login"><Form /></Route>
                <Route exact path="/" component={Homepage}></Route>
                <Route exact path="/ComputerNetworksQuiz" component={CNTest}></Route>
                <Route exact path="/Result" component={Result}></Route>
              </Switch>
          </div>
        </BrowserRouter>
    )
  }
}
export default App;