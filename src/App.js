import React  ,
import './App.css' ;
import Header from "./Header";
import "./Header.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login" ;
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import { useStateValue } from "./StateProvider";


function App() {
     const [ {user}, dispatch] = useStateValue ();

  return (
    <div className="app">
      <Router>
          {!user? (
            <h1><Login/></h1>
          ) :(
            <> 
            <Header/>
            <div className="app__body">
              <Sidebar/> 
              <Switch> <Route path="/room/:roomId">< Chat /></Route>
                 <Route path="/"><h1>WELCOME</h1></Route>
                 </Switch>
            </div>

             </>
          )}

       
      </Router>
    </div>
  );
}

export default App;
