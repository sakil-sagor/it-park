import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import LoginPage from './Components/LoginPage/LoginPage';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/login">
              <LoginPage></LoginPage>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router >
      </AuthProvider>

    </div>
  );
}

export default App;
