import {Component} from "react"
import './App.css';
import MainCard from "./components/MainCard";
import Header from "./components/Header";

class  App extends Component {
  
  render(){
    return <div className="app">
      <Header />
      <MainCard/>
    </div>
  }
}

export default App;
