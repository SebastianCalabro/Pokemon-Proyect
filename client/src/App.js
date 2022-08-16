import './App.css';
import Home from "./components/Home/Home.jsx"
import Nav from "./components/NavBar/NavBar.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Create from "./components/Create/Create.jsx"
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import {Route} from "react-router-dom"
import {Provider} from "react-redux"

function App() {
  return (
    <>
  
  <Nav/>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path='/pokemons/:pokemonId' component={Detail}/>
    <Route exact path='/create' component={Create}/>
    </>
  );
}

export default App;
