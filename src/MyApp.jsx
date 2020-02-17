import React from 'react';
import Loadable from 'react-loadable';
import Load from './pages/load';

const LoadableMyApp = Loadable({
  loader: () => import('./App'),
  loading() {
    console.log('loading');
    return <Load />;
  }
});

export default class MyApp extends React.Component {
  render() {
    return <LoadableMyApp />;
  }
}
