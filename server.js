var io = require('socket.io')(8080);
var cfg = require('./config.json');
var tw = require('node-tweet-stream')(cfg);
tw.track('javascript');
tw.on('tweet', function(tweet){
  
  console.log(tweet);
})