import React, { Component, PropTypes } from 'react';
import HomeJumbotron from '../HomeJumbotron';
import HomePanels from '../HomePanels';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomePage.scss';


class HomePage extends Component {

  render() {
    return (
      <div className={s.root}>
       <HomeJumbotron />
       <HomePanels />
      </div>
    );
  }

}

export default withStyles(HomePage, s);
