import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sampleAction } from './actions/sampleAction';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Houses from './pages/Houses';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Investments from './pages/Investments';
import WhyMarksem from './pages/WhyMarksem';

export default function App(props) {
  const [scrolled, setScrolled] = useState(false)

  const isScrolled = () => {
    window.addEventListener('scroll', () => {
      window.scrollY < 20 ? setScrolled(false) : setScrolled(true)
    })
  }

  return (
    <div className="App" onScroll={isScrolled()}>
      <Header scrolled={scrolled} />
      
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
      </Switch>

      <Footer />


    </div>
  );
}