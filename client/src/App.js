import React from 'react';
import MainLayout from './layout/MainLayout';
import Routing from './pages/Routing';
import './App.css';
import './playground.css';

function App() {

  React.useEffect(() => {
    document.title = "Talao Playground"
  }, [])

  return (
    <div className="App">
      <MainLayout>
        <Routing />
      </MainLayout>
    </div>
  );
}

export default App;
