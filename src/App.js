import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Houses from './pages/Houses';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home';
import Investments from './pages/Investments';
import WhyMarksem from './pages/WhyMarksem';
import NotFound from './pages/NotFoundPage/NotFoundPage';
// import './App.scss'

//удали меня
import Sandbox from "./pages/Sandbox"
import { useDispatch, useSelector } from 'react-redux';
import { setHousesData } from './actions/housesActions';

export default function App(props) {

  return (
    <div className="App">
      <Header
      />
      <Switch>
        <Route exact
          path="/"
          component={() => <Home />}
        />
        <Route exact
          path="/whymarksem"
          component={() => <WhyMarksem />}
        />
        <Route exact
          path="/houses"
          component={() => <Houses />}
        />
        <Route exact
          path="/investments"
          component={() => <Investments />}
        />
        <Route exact
          path="/contacts"
          component={() => <Contacts />}
        />


        //удали меня!
        <Route exact
          path="/sandbox"
          component={() => <Sandbox />}
        />

        <Route
          path="/404"
          component={() => <NotFound />}
        />
        <Redirect to="/404" />



      </Switch>

      <Footer />

    </div>
  );
}