import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Twitter.scss';
//console.log('TwitterLoader s: ', s);

class TwitterLoader extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={"loader " + (this.props.paging ? "active" : "")}>
          <img src="svg/loader.svg" />
        </div>
      </div>
    );
  }


}

export default withStyles(TwitterLoader, s);