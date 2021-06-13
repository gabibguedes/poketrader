import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar';
import History from '../pages/History';
import NewTrade from '../pages/NewTrade';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/history" /> }/>
        <Route path="/history" exact component={History} />
        <Route path="/new-trade" exact component={NewTrade} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;