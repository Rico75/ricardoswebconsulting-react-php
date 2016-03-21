import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomePanels.scss';
console.log('homePanel s: ', s);

class HomePanels extends Component {

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
              </p>
            </Panel>
          </li>
        </ul>

      </div>
    );
  }

}

export default withStyles(HomePanels, s);
