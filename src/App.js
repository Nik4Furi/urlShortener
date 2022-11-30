//Our Context API 
import UrlsState from "./UrlsContexts/UrlsState";

//Imports the packages from npm
import { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// Routers Inside content 
import Navbar from "./MyComponents/Navbar"
import Alert from './MyComponents/Alert'

// Switch Inside content 
import Home from "./MyComponents/Home"
import Error from "./MyComponents/Error"

function App() {
  const [alert, setAlert] = useState(null); //To iterating our alert component

  //Show alert help the users to show the alerts msgs
  const ShowAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <Router>
        <UrlsState >
          {/* Navbar component  */}
          <Navbar />

          {/* Alert Component  */}
          <Alert alert={alert} />

          <Switch>

            {/* Home Page  */}
            <Route exact path="/"> <Home ShowAlert={ShowAlert} /> </Route>

            {/* Error Page  */}
            <Route exact path="*"> <Error /> </Route>

          </Switch>
        </UrlsState>
      </Router>
    </>
  );
}

export default App;
