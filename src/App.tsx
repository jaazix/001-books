
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "./components/main/index.tsx";
import Login from './components/login/index.tsx';
import Register from './components/register/index.tsx';
import Header from './Header.tsx';


const App = () =>{
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
