import './App.css';
import Home from "./components/Home/Home.jsx"
import Nav from "./components/NavBar/NavBar.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Create from "./components/Create/Create.jsx"
import Test from "./components/test/test.jsx"
import {Route} from "react-router-dom"

function App() {
  return (
    <>
    <Nav/>
    <Route exact path="/" component={Home}/>
    <Route exact path='/pokemons/:pokemonId' component={Detail}/>
    <Route exact path='/create' component={Create}/>
    <Route exact path='/test' component={Test}/>
    </>
  );
}

export default App;
