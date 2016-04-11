import React, { Component, PropTypes } from 'react';
import { Panel, Button } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomePanels.scss';
import Twitter from '../Twitter';
//console.log('homePanel s: ', s);

// let initialState = JSON.parse(document.getElementById('initial-state').innerHTML);
// console.log('initialState: ', initialState);

class HomePanels extends Component {

  //getInitialState: function () {
  //var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)
  //};

  static defaultProps = {
    //initialState: JSON.parse(document.getElementById('initial-state').innerHTML),
    initialState: {
      active: true,
      author: "Simarjeetsingh",
      avatar: "http://pbs.twimg.com/profile_images/1410657635/gjuihiuhihioh_normal.JPG",
      body: "RT @codeasearch: hide and show div tag using #jquery and #javascript https://t.co/2ZcnJBieta",
      date: "2016-04-05T08:33:10.000Z",
      screenname: "isimarjeetsingh",
      twid: "717268833715818496"
    },
  };

  static propTypes = {
    initialState: PropTypes.object,
  };

  state = {
    initialState: this.props.initialState,
  };

  render() {
    return (
      <div className={s.root}>

        <ul className={s['flex-container']}>
          <li className={s['flex-item']}>
            <Panel>
              <h2>Game Development</h2>
              <p>
                One of my favorite hobbies is game development.
                I just started to develop games in JavaScript
                using different game engines. Currently just
                started playing with a few engines and working
                on a few ideas for a game.
                <br /><br />
                <Button className={s['btn-primary']}>Comming Soon...</Button>
              </p>
            </Panel>
          </li>
          <li className={s['flex-item']}>
            <Panel>
              <h2>Web Consulting</h2>
              <p>
                The web moves at light speed when it comes to the number
                of new technologies and coding languages that it takes to learn
                a new framework or content management systems. With seventeen years
                experience of web coding and standars, I have developed a good sence
                of what technologies to use to best resolve the task at hand with little
                time to implement which means a faster time to production.
                <br /><br />
                <Button className={s['btn-primary']}>Comming Soon...</Button>
              </p>
            </Panel>
          </li>
          <li className={s['flex-item']}>
            <Panel>
              <h2>Tweets</h2>
              <p>
                <Twitter tweets={this.state.initialState}/>
              </p>
            </Panel>
          </li>
        </ul>

      </div>
    );
  }

}

export default withStyles(HomePanels, s);
