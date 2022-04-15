import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Login from './Pages/login';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Login/>}/>
    </Routes>
    );
  }
}

export default App;