import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer';
import Homepage from './Homepage';
import Speak from './Speak';
import Schedule from './Schedule';
import Venue from './Venue';
import Register from './Register';

function App() {
  return (
    <div>
    <Router>
     <Navbar/>


      <Switch>
        <Route exact path='/'>
            <Homepage/>
        </Route>

        <Route path='/Speak'>
              <Speak/>
        </Route>
        
        <Route path='/Schedule'>
              <Schedule/>
        </Route>

        <Route path='/Venue'>
              <Venue/>
        </Route>
        <Route path='/Register'>
              <Register/>
        </Route>




      </Switch>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
