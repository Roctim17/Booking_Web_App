import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import List from './Pages/List';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/hotels" element={<List></List>}></Route>
        <Route path="/hotels/:id" element={<Hotel></Hotel>}></Route>
      </Routes>
    </div>
  );
}

export default App;
