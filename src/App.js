
import Home from "./components/home/Home";
import TopBar from "./components/topbar/TopBar";
import Footer from "./components/footer/Footer";
import Customized from "./pages/Customized/Customized.jsx";
import About from "./pages/About/About";
import Esports from"./pages/Esports/Esports";
import Register from"./pages/Register/Register";
import Sustainability from "./pages/Sustainability/Sustainability";
import Login from "./pages/Login/Login.jsx"
import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './app.css';
import { Switch } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
    <TopBar/>
    
    <BrowserRouter>
        <Switch>
       
        <Route exact path="/">
         <Home/>
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Esports">
            <Esports />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Customized">
            <Customized/>
          </Route>
          <Route path="/Login">
            <Login/>
            </Route>
            <Route path="/Sustainability">
            <Sustainability/>
            </Route>
        </Switch>
        
      </BrowserRouter>
      <Footer/>
  </div>
  );
}

export default App;