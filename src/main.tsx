import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { HashRouter, Route, Routes } from 'react-router-dom';

import Login from './components/login/index.tsx';
import Register from './components/register/index.tsx';
import Users from './components/users/users.tsx';
import Chat from './components/chat/chat.tsx';
import Terms from './components/terminos/terms.tsx';
import Main from './components/main/index.tsx';
import Recover from './components/recover/index.tsx';
import MailForm from './components/recover/mailForm.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Main/>}></Route>
          <Route path="login" element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='users' element={<Users/>} />
          <Route path='chat' element={<Chat/>} />
          <Route path='terms' element={<Terms/>}/>
          <Route path='recover' element={<Recover/>}/>
          <Route path='mail' element={<MailForm/>}/>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
