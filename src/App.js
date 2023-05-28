import './App.css';
import 'bootstrap';
import Header from './Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './Layout/Footer';
import Register from './Auth/Register';
import Login from './Auth/Login';
import { useState } from 'react';


function App() {

  const [users, setUsers] = useState(
    [{
      name: "Ghulam Ali",
      email: "ghulamali2612@gmail.com",
      password: "Test1234!",
      failedAttempts: 0
    }]
  );
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [userLoginFlag, setUserLoginFlag] = useState(false);


  const getUserLogin = () => {
    setLogin(true);
    setRegister(false);
  }

  const registerUser = (userData) => {
    setUsers((prevUsers) => {
      return [...prevUsers, userData]
    })
    getUserLogin();
  }


  const failedAttempt = (failedUser) => {
    setUsers((prevUsers) => {
      return prevUsers.map(user => {
        if (user.email === failedUser.email) {
          return failedUser;
        }
        return user;
      })
    })
  }

  return (
    < div className="App">
      <Header isUserLoggedIn={userLoginFlag}/>
      {!userLoginFlag && login && <Login users={users} failedAttempt={failedAttempt} setUserLoginFlag={setUserLoginFlag}/>}
      {!userLoginFlag && register && <Register registerUser={registerUser} />}
      <Footer />

    </div>
  );
}

export default App;