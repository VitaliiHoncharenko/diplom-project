import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";

// import StartPage from './components/StartPage'
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar/>
          <br/>
          <Route path="/" exact component={ExercisesList}/>
          <Route path="/edit/:id" component={EditExercise}/>
          <Route path="/create" component={CreateExercise}/>
          <Route path="/user" component={CreateUser}/>
        </div>
      </Router>
    )
  }
}

export default App;
