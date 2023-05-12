import logo from './logo.svg';
import './App.css';
import Posts from './components/posts';
import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
      <div className='contrainer-fluid'>
        <Navbar />
          <div className='contrainer'>
            <Outlet />
          </div>
          {/* <Posts /> */}
      </div>
  );
}

export default App;
