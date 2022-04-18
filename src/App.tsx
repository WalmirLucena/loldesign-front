import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login';
import SignUp from './Pages/signUp';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>

    </Routes>
    );
  }
}

export default App;