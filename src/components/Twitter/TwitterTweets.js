import React, { Component, PropTypes } from 'react';
import TwitterTweet from './TwitterTweet';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Twitter.scss';
//console.log('TwitterTweets s: ', s);

class TwitterTweets extends Component {

  static propTypes = {
    tweets: PropTypes.string,
  };

  static defaultProps = {
    tweets: '',
  };

  render() {

    let content = this.props.tweets.map(function(tweet){
      return (
        <TwitterTweet key={tweet._id} tweet={tweet} />
      )
    });

    return (
      <div className={s.root}>

        <ul className="tweets">{content}</ul>

      </div>
    );
  }


}

export default withStyles(TwitterTweets, s);