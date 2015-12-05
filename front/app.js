//var server = require('http').Server;
var youtube = require('youtube-iframe-player');
var fs = require('fs');
var http = require('http');


http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8080);

function buildHtml(req) {
  var header = '';
  var body = '<div id="player"></div>';

  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>'
       + '<html><header>' + header + '</header><body>' + body + '</body></html>';
};


//this should be expecting an event TODO
// change readFile to readStream
function onReadSongRequest() {
  fs.readFile('../listOfVideos.txt', function (err, data) {
    if (err) throw err;
    videoIdSet = data;
    onYouTubeIframeAPIReady();
  });
}
// 4. The API will call this function when the video player is ready.
youtube.init(function() {
    console.log('API Loaded');

    var youtubePlayer = youtube.createPlayer('container', {
        width: '720',
        height: '405',
        videoId: videoIdSet,
        playerVars: { 'autoplay': 0, 'controls': 1 },
        events: {
            'onReady': playerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    function playerReady(event) {
        youtubePlayer.playVideo();
    }

    function onPlayerStateChange(event) {
        console.log('Player State Changed: ', event);
    }
});
