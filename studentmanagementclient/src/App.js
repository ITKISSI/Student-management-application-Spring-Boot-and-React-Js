import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddStudent from './student/AddStudent';
import ViewStudent from './student/ViewStudent';
import EditStudent from './student/EditStudent';


function App() {
  return (
      <div className='App'>
        <Router>
          <Navbar/>

          <Routes> 

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/add" element={<AddStudent/>} />
            <Route exact path="/view" element={<ViewStudent/>} />
            <Route exact path="/edit/:id" element={<EditStudent/>} />

          </Routes>

        </Router>
        
      </div>
  );
}

export default App;
