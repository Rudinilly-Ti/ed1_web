import Rotas from './routes/routes'
import GlobalStyle from './shared/styles';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
