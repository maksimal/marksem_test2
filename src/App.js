import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sampleAction } from './actions/sampleAction';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Houses from './pages/Houses';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home';
import Investments from './pages/Investments';
import WhyMarksem from './pages/WhyMarksem';
import NotFound from './pages/NotFoundPage/NotFoundPage';

export default function App(props) {
  return (
    <div className="App">
      <Header />
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
          <Redirect to="/404"/>
        </Switch>

      <Footer />
      
    </div>
  );
}