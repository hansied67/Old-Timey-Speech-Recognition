import Dictaphone from './components/Dictaphone';
import './App.css';
import { GlobalHotKeys } from 'react-hotkeys';

const keyMap = { LISTEN: "t" };

function App() {
  return (
    <GlobalHotKeys keyMap={keyMap}>
      <div className="App">
        <header className="App-header">
          <Dictaphone />
        </header>
      </div>
    </GlobalHotKeys>
  );
}

export default App;
