import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomeJumbotron.scss';
//console.log('s: ', s);

class HomeJumbotron extends Component {

  render() {
    return (

      <div className={s['center-block']}>
        <Jumbotron className={s.jumbotron}>
          <div className={s['jumbotron-content-center']}>
            <h2>Ricardo's Web Consulting</h2>
            <p className={s['jumbotron-text-content']}>
                We strive to make the web site an asset to your business not a problem.
                Too many times we have seen web sites that are poorly designed and created,
                which hinder a business. Today's web standards have grown beyond the web.
                Our team has in-depth knowledge of what it takes to stand out and achieve high
                rankings in search engines. We also strive to make the most affordable, efficient,
                and quality web site that would please any client. We endeavor to make our clients happy
                by making their business grow, because when your business grows ours will grow with you.
                Our number one priority is our client, if your happy only then are we happy.
            </p>
            <Button className={s['btn-primary']}>Learn more</Button>
          </div>
        </Jumbotron>
      </div>
    );
  }

}

export default withStyles(HomeJumbotron, s);
