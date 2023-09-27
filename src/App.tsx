
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "./components/main/index.tsx";
import Login from './components/login/index.tsx';

const App = () =>{
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
