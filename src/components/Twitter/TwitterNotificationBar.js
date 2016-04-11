import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Twitter.scss';
//console.log('TwitterNotificationBar s: ', s);

class TwitterNotificationBar extends Component {

  static propTypes = {
    count: PropTypes.number,
  };

  static defaultProps = {
    count: 1,
  };

  render() {

    let count = this.props.count;

    return (
      <div className={s.root}>
        <div className={"notification-bar" + (this.props.count > 0 ? ' active' : '')}>
          <p>There are {this.props.count} new tweets! <a href="#top" onClick={this.props.onShowNewTweets}>Click here to see them.</a></p>
        </div>
      </div>
    );
  }


}

export default withStyles(TwitterNotificationBar, s);