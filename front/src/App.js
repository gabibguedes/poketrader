import TradeProvider from './context';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <TradeProvider>
      <Home />
    </TradeProvider>
  );
}

export default App;
