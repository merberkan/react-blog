import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
// npx json-server --watch data/db.json --port 8000 apiyi başlatma 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          {/* exact yazmamızın amacı react direk ilk eşleşene bakıyor /create içinde / olduğu için direk home'a atıyor. Exact bunu engelliyor */}
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
