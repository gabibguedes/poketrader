import TradeProvider from './context';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <TradeProvider>
      <Routes/>
    </TradeProvider>
  );
}

export default App;
