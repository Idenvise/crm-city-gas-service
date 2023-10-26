import React, { useEffect, useState } from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import './App.scss';
import AuthTemplate from '../AuthTemplate/AuthTemplate';
import NotFound from '../NotFound/NotFound';
import SideBar from '../SideBar/SideBar';
import Incidents from '../Incidents/Incidents';

function App() {
  let nav = useNavigate();
  let location = useLocation();
  const [loggedin, setLoggedin] = useState(true);

  useEffect(() => {
    if (loggedin === false) {
      nav('./signin')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={
          <>
            <SideBar/>
            <Incidents location={location.pathname}/>
          </>} 
        />
        <Route path='/request' element={
          <>
            <SideBar/>
          </>} 
        />
        <Route path='/appeal' element={
          <>
            <SideBar/>
          </>} 
        />
        <Route path='/office_memo' element={
          <>
            <SideBar/>
          </>} 
        />
        <Route path='/clients' element={
          <>
            <SideBar/>
          </>} 
        />
        <Route path='/warehouse' element={
          <>
            <SideBar/>
          </>} 
        />
        <Route path='/showcase' element={
          <>
            <SideBar/>
          </>} 
        />
        <Route path='/reports' element={
          <>
            <SideBar/>
          </>} 
        />
        <Route path='/staff' element={
          <>
            <SideBar/>
          </>} 
        />
        {['/signin', '/recovery', '/new-password'].map((path, i) => 
          <Route path={path} element={<AuthTemplate location={location.pathname}/>} key={i}/>
        )}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;