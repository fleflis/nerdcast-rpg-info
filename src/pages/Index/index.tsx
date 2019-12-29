import React from 'react';
import '../../styles/images.scss';
import '../../styles/gradients.scss';
import './styles.scss';
import Player from '../../components/Player';

const App: React.FC = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <Player/>
      </header>
    </div>
  );
}

export default App;
