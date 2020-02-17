import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import './load.scss';
import 'nprogress/nprogress.css';

const Load = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return <div className="load"></div>;
};

export default Load;
