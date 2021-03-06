import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Houses from './pages/Houses';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home';
import Investments from './pages/Investments';
import WhyMarksem from './pages/WhyMarksem';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import { setHousesData } from './actions/housesActions';

import { useDispatch, useSelector } from 'react-redux';


export default function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHousesData());
  }, [])

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