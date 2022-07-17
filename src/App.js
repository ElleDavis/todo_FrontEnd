import './App.css';
import {Route, Switch} from 'react-router-dom'
import {useState} from 'react';
import Landing from './Components/Pages/Landing';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="container">
      <h1>Todos Frontend</h1>

      <Switch>
        <Route exact path='/' render={routerProps =>
           <Landing {...routerProps} setUser={setUser}/> } />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;