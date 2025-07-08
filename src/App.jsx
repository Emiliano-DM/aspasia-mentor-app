import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navegation from './routing/Navegation';
import Results from './pages/Results';
import { ResultProvider } from './provider/resultProvider';
import { Link } from 'react-router-dom';

function App() {
  return (
    <ResultProvider>
      <div className="app-container">
        <Header />
        <main>
          <Navegation />
        </main>
        <Footer />
      </div>
    </ResultProvider>
  );
}

export default App;
