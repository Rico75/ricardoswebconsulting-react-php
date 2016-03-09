import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomeJumbotron.scss';
console.log('s: ', s);

class HomeJumbotron extends Component {

  render() {
    return (

      <div className={s['center-block']}>
        <Jumbotron className={s.jumbotron}>
          <div className={s['jumbotron-content-center']}>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <Button className={s['btn-primary']}>Learn more</Button>
          </div>
        </Jumbotron>
      </div>
    );
  }

}

export default withStyles(HomeJumbotron, s);
