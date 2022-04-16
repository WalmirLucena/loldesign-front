import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>

    </Routes>
    );
  }
}

export default App;