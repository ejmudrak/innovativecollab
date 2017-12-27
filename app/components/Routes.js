import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from '../pages/home/page';
import AboutPage from '../pages/about/page';
import AwarenessPage from '../pages/awareness-mindfulness/page';
import EfficacyPage from '../pages/efficacy/page';
import IntersectionalityPage from '../pages/intersectionality/page';
import BiasPage from '../pages/bias/page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="about" component={AboutPage} />
    <Route path="awareness-mindfulness" component={AwarenessPage} />
    <Route path="efficacy" component={EfficacyPage} />
    <Route path="intersectionality" component={IntersectionalityPage} />
    <Route path="bias" component={BiasPage} />

  </Route>
);
