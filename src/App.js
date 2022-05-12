import Rotas from './routes/routes'
import GlobalStyle from './shared/styles';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
