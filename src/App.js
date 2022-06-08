import './App.css';
import Navbar from './MyComponents/Navbar'
import Home from './MyComponents/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './MyComponents/Create';
import BlogDetails from './MyComponents/BlogDetails';
import NotFound from './MyComponents/NotFound';


// CMD To Run JSON-SERVER:
// $npx json-server --watch 'src/data/db.json' --port 8000

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          
            {/* 1.Homepage */}
            <Route exact path="/">
              <Home />
            </Route>

            {/* 2. create */}
            <Route path="/create">
              <Create />
            </Route>
            
            {/* 3. BlogDetails */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          
            {/* 4. LINK NOT FOUND. */}
            <Route path="*">
              <NotFound />
            </Route>
          
          </Switch>
        </div>
      </div>
    </Router>
  );

}

export default App;
