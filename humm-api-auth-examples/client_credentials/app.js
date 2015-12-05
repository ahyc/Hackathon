/**
 * This is an example of a basic node.js  that performs
 * the Client Credentials to authenticate against
 * the Humm Accounts.
 *
 * For more information, read
 * http://developers.myhumm.com/web/auth-guide#auth-client
 */

var humm = require('humm');
var unirest = require('unirest');
var artistId;

// init humm with client_id
humm.init({
    client_id: '56632714ae8c50423a8b4571',
    client_secret: '2d5c68c388c00dddbc9260683025507aaf1feb58c53594d66450dc1ee729d90f'
});

//request access token with code
console.log('----------starting request------');
humm.authViaClientCredentials(function(err, res) {
    console.log('------------- authViaClientCredentials complete -------------');
    console.log('authErr');
    //console.log(err);
    console.log('AuthRes');
    //console.log(res);

    //set token for future request
    humm.setAccessToken(res.data_response.access_token);

    //make authorised here.... NEIL 

     var artistId = "55116991f9c816a0d639ea75"
    
     var options = {
        limit: 0,
        offset: 0,
     };
     // humm.artists.getRadio(artistId, options, function(error, response){});
     humm.artists.getRadio(artistId, options, function(error, response){
        // INSERT CODE HERE
     });
 /*    
      humm.get(artistId, options, function(error, response){
        console.log("--------test----");
        console.log(error);
        console.log(response);
      });
*/
/*
  humm.artists.addFollowers(artistId, function(error, response){
    console.log(error);
    console.log(response);
  });
*/

// humm.songs.getFeatured({"limit":"2","offset": "0","genre": "pop" }, function(error, response){
//     console.log("=====================");
//     console.log(error);
//     console.log(response);
//     console.log("=====================");
//     });

var options = {
    limit: "1",
    offset: "0"
};

var keyword = "jimmy";
console.log("--");

// Get an artist name and return the id
humm.artists.search(keyword, options, function(error, response){
     artistId = response['data_response'][0]['_id'];
     console.log(artistId);
 });


// Given an artistsid, return the youtube url
humm.artists.getTopSongs(artistId, options, function(error, response){
    console.log(response['data_response'][0]['']);
});


}); //put code inside here



/*
// These code snippets use an open-source library. http://unirest.io/nodejs
unirest.get("https://humm-api.p.mashape.com/artists/popular?auth=56632a2a8cc93b736de434b5&limit=20&offset=0")
.header("X-Mashape-Key", "Iwm1620S9ZmshwDtl37iBEdyFh3ap1PPTa0jsnXdc02AZDRy4B")
.header("Accept", "application/json")
.end(function (result) {
  //console.log(result.status, result.headers, result.body);
  console.log(result.body['data_response'])
});
*/


/*
// Search for artist - return id
unirest.get("https://humm-api.p.mashape.com/artists?auth=56632a2a8cc93b736de434b5&keyword=justin+bieber&limit=20&offset=0")
.header("X-Mashape-Key", "Iwm1620S9ZmshwDtl37iBEdyFh3ap1PPTa0jsnXdc02AZDRy4B")
.header("Accept", "application/json")
.end(function (result) {
  //console.log(result.status, result.headers, result.body);
  console.log(result.body);
  //if (result.body['data_response'][''])
  // result.body['data_response']
});
*/
/*
// get similar artists
unirest.get("https://humm-api.p.mashape.com/artists/55116991f9c816a0d639ea75/similar?auth=56632a2a8cc93b736de434b5")
.header("X-Mashape-Key", "Iwm1620S9ZmshwDtl37iBEdyFh3ap1PPTa0jsnXdc02AZDRy4B")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
*/

/*
unirest.get("https://humm-api.p.mashape.com/artists/55116991f9c816a0d639ea75/similar?auth=56632a2a8cc93b736de434b5")
.header("X-Mashape-Key", "Iwm1620S9ZmshwDtl37iBEdyFh3ap1PPTa0jsnXdc02AZDRy4B")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
*/


