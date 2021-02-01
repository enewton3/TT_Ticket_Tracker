import './App.css';
import React, { useState, useEffect } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import LandingPage from './screens/LandingPage/LandingPage';
import Tickets from './screens/Tickets/Tickets';
import ChatContainer from "./containers/ChatContainer/ChatContainer";





function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push('/')
  }

  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData);
    setCurrentUser(currentUser);
    history.push('/')
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
  }


  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/home'>
            <LandingPage />
          </Route>
          <Route path='/chat'>
            <ChatContainer currentUser={currentUser} />
          </Route>
          <Route path='/'>
            <Tickets />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
