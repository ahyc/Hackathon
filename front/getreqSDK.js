var reqSDK = require('require-sdk');

function test (err) {  	
   var reqY = reqSDK('https://www.youtube.com/iframe_api', 'YT');
   console.log("good god!");
   return reqY;
   if (err !== null) {
      console.log('console error ' + err);
      return;
   }
};

test();
