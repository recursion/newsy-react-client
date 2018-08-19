/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - Newsy"
      defaultTitle="Newsy"
    >
      <meta name="description" content="A simple news headline search." />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

/*
      <Route exact path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="" component={NotFoundPage} />
*/

export default App;
