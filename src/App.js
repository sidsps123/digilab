import { Login,Auth,Success} from "./components";
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "./App.css";
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/auth' element={<Auth />}></Route>
                 <Route exact path='/success' element={<Success />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
