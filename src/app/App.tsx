import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Vite + React</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
