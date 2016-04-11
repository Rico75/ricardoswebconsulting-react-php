import React, {Component, PropTypes} from 'react';
import TwitterTweets from './TwitterTweets';
import TwitterLoader from './TwitterLoader';
import TwitterNotificationBar from './TwitterNotificationBar';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Twitter.scss';
console.log('Twitter s: ', s);

class Twitter extends Component {

  constructor(props) {
    super(props);
    props = props || this.props;
    this.state = {
      tweets: props.tweets,
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };
    // this.tick = this.tick.bind(this);
  }

  // static propTypes = {
  //   tweets: PropTypes.string,
  //   count: PropTypes.number,
  //   page: PropTypes.number,
  //   paging: PropTypes.bool,
  //   skip: PropTypes.number,
  //   done: PropTypes.bool
  // };
  //
  // static defaultProps = {
  //   tweets: this.defaultProps.tweets,
  //   count: 0,
  //   page: 0,
  //   paging: false,
  //   skip: 0,
  //   done: false
  // };

  // Method to add a tweet to our timeline
  addTweet(tweet) {
    // Get current application state
    let updated = this.state.tweets;

    // Increment the unread count
    let count = this.state.count + 1;

    // Increment the skip count
    let skip = this.state.skip + 1;

    // Add tweet to the beginning of the tweets array
    updated.unshift(tweet);

    // Set application state
    this.setState({tweets: updated, count: count, skip: skip});
  }

  // Method to get JSON from server by page
  getPage(page) {
    console.log('getPage');
    // Setup our ajax request
    let request = new XMLHttpRequest(), self = this;
    //request.open('GET', 'page/' + page + "/" + this.state.skip, true);
    request.open('GET', 'api/TwitterApi.php/' + this.state.skip, true);
    request.onload = function () {

      // If everything is cool...
      if (request.status >= 200 && request.status < 400) {

        // Load our next page
        self.loadPagedTweets(JSON.parse(request.responseText));

      } else {

        // Set application state (Not paging, paging complete)
        self.setState({paging: false, done: true});

      }
    };

    // Fire!
    request.send();
  }

  // Method to show the unread tweets
  showNewTweets() {

    // Get current application state
    let updated = this.state.tweets;

    // Mark our tweets active
    updated.forEach(function (tweet) {
      tweet.active = true;
    });

    // Set application state (active tweets + reset unread count)
    this.setState({tweets: updated, count: 0});

  }

  // Method to load tweets fetched from the server
  loadPagedTweets(tweets) {

    // So meta lol
    let self = this;

    // If we still have tweets...
    if (tweets.length > 0) {

      // Get current application state
      var updated = this.state.tweets;

      // Push them onto the end of the current tweets array
      tweets.forEach(function (tweet) {
        updated.push(tweet);
      });

      // This app is so fast, I actually use a timeout for dramatic effect
      // Otherwise you'd never see our super sexy loader svg
      setTimeout(function () {

        // Set application state (Not paging, add tweets)
        self.setState({tweets: updated, paging: false});

      }, 1000);

    } else {

      // Set application state (Not paging, paging complete)
      this.setState({done: true, paging: false});

    }
  }

  // Method to check if more tweets should be loaded, by scroll position
  checkWindowScroll() {

    // Get scroll pos & window data
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let s = (document.body.scrollTop || document.documentElement.scrollTop || 0);
    let scrolled = (h + s) > document.body.offsetHeight;

    // If scrolled enough, not currently paging and not complete...
    if (scrolled && !this.state.paging && !this.state.done) {

      // Set application state (Paging, Increment page)
      this.setState({paging: true, page: this.state.page + 1});

      // Get the next page of tweets from the server
      this.getPage(this.state.page);

    }
  }

  // // Set the initial component state
  // getInitialState(props) {
  //
  //   props = props || this.props;
  //
  //   // Set initial application state using props
  //   return {
  //     tweets: props.tweets,
  //     count: 0,
  //     page: 0,
  //     paging: false,
  //     skip: 0,
  //     done: false
  //   };
  //
  // }

  componentWillReceiveProps(newProps, oldProps) {
    this.setState(this.getInitialState(newProps));
  }

  // Called directly after component rendering, only on client
  componentDidMount() {

    // Preserve self reference
    let self = this;

    // Initialize socket.io
    let socket = io.connect();

    // On tweet event emission...
    socket.on('tweet', function (data) {

      // Add a tweet to our queue
      self.addTweet(data);

    });

    // Attach scroll event to the window for infinity paging
    window.addEventListener('scroll', this.checkWindowScroll);

  }

  render() {

    let content = this.props.tweets.map(function (tweet) {
      return (
        <TwitterTweet key={tweet._id} tweet={tweet}/>
      )
    });

    return (
      <div className={s.root}>

        <div className="tweets-app">
          <TwitterTweets tweets={this.state.tweets}/>
          <TwitterLoader paging={this.state.paging}/>
          <TwitterNotificationBar count={this.state.count} onShowNewTweets={this.showNewTweets}/>
        </div>

      </div>
    );
  }


}

export default withStyles(Twitter, s);
