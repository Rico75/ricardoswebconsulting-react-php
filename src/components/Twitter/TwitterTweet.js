import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Twitter.scss';
//console.log('TwitterTweet s: ', s);

class TwitterTweet extends Component {

  static propTypes = {
    tweet: PropTypes.string,
  };

  static defaultProps = {
    tweet: '',
  };

  render() {

    let tweet = this.props.tweet;

    return (
      <div className={s.root}>
        <li className={"tweet" + (tweet.active ? ' active' : '')}>
          <img src={tweet.avatar} className="avatar"/>
          <blockquote>
            <cite>
              <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a>
              <span className="screen-name">@{tweet.screenname}</span>
            </cite>
            <span className="content">{tweet.body}</span>
          </blockquote>
        </li>
      </div>
    );
  }


}

export default withStyles(TwitterTweet, s);