import React, {Component, PropTypes} from 'react';

class Tweet extends Component {

  static propTypes = {
    getTweets: PropTypes.function,
  };

  static defaultProps = {
    a: 1,
  };

  getTweets() {
    Tweet = {
      active: true,
      author: "Simarjeetsingh",
      avatar: "http://pbs.twimg.com/profile_images/1410657635/gjuihiuhihioh_normal.JPG",
      body: "RT @codeasearch: hide and show div tag using #jquery and #javascript https://t.co/2ZcnJBieta",
      date: "2016-04-05T08:33:10.000Z",
      screenname: "isimarjeetsingh",
      twid: "717268833715818496"
    };
  };

  render() {
    return (
      <div>
        {
          this.prototype.getTweets()
        }
      </div>
    );
  }

}

export default Tweet;

/*
 var mongoose = require('mongoose');

 // Create a new schema for our tweet data
 var schema = new mongoose.Schema({
 twid       : String
 , active     : Boolean
 , author     : String
 , avatar     : String
 , body       : String
 , date       : Date
 , screenname : String
 });

 // Create a static getTweets method to return tweet data from the db
 schema.statics.getTweets = function(page, skip, callback) {

 var tweets = [],
 start = (page * 10) + (skip * 1);

 // Query the db, using skip and limit to achieve page chunks
 Tweet.find({},'twid active author avatar body date screenname',{skip: start, limit: 10}).sort({date: 'desc'}).exec(function(err,docs){

 // If everything is cool...
 if(!err) {
 tweets = docs;  // We got tweets
 tweets.forEach(function(tweet){
 tweet.active = true; // Set them to active
 });
 }

 // Pass them back to the specified callback
 callback(tweets);

 });

 };

 // Return a Tweet model based upon the defined schema
 module.exports = Tweet = mongoose.model('Tweet', schema);
 */
