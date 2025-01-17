import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Detail from './Detail'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user/:id' element={<Detail/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
