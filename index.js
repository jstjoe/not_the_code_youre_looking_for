//  /$$$$$$$$ /$$$$$$$$ /$$   /$$ /$$$$$$$  /$$$$$$$$  /$$$$$$  /$$   /$$
// |_____ $$ | $$_____/| $$$ | $$| $$__  $$| $$_____/ /$$__  $$| $$  /$$/
//      /$$/ | $$      | $$$$| $$| $$  \ $$| $$      | $$  \__/| $$ /$$/ 
//     /$$/  | $$$$$   | $$ $$ $$| $$  | $$| $$$$$   |  $$$$$$ | $$$$$/  
//    /$$/   | $$__/   | $$  $$$$| $$  | $$| $$__/    \____  $$| $$  $$  
//   /$$/    | $$      | $$\  $$$| $$  | $$| $$       /$$  \ $$| $$\  $$ 
//  /$$$$$$$$| $$$$$$$$| $$ \  $$| $$$$$$$/| $$$$$$$$|  $$$$$$/| $$ \  $$
// |________/|________/|__/  \__/|_______/ |________/ \______/ |__/  \__/


//   /$$$$$$  /$$$$$$$  /$$$$$$                         
//  /$$__  $$| $$__  $$|_  $$_/                         
// | $$  \ $$| $$  \ $$  | $$                           
// | $$$$$$$$| $$$$$$$/  | $$                           
// | $$__  $$| $$____/   | $$                           
// | $$  | $$| $$        | $$                           
// | $$  | $$| $$       /$$$$$$                         
// |__/  |__/|__/      |______/                                                               
                                                                                                
//   /$$$$$$  /$$      /$$  /$$$$$$   /$$$$$$  /$$   /$$
//  /$$__  $$| $$$    /$$$ /$$__  $$ /$$__  $$| $$  | $$
// | $$  \__/| $$$$  /$$$$| $$  \ $$| $$  \__/| $$  | $$
// |  $$$$$$ | $$ $$/$$ $$| $$$$$$$$|  $$$$$$ | $$$$$$$$
//  \____  $$| $$  $$$| $$| $$__  $$ \____  $$| $$__  $$
//  /$$  \ $$| $$\  $ | $$| $$  | $$ /$$  \ $$| $$  | $$
// |  $$$$$$/| $$ \/  | $$| $$  | $$|  $$$$$$/| $$  | $$
//  \______/ |__/     |__/|__/  |__/ \______/ |__/  |__/
                                                     
// load dependencies
var zendesk = require('node-zendesk'),
    us = require('underscore');
// configure node-zendesk
var zd = zendesk.createClient({
  username:  'joe+it@zendesk.com',
  token:     'LB0beoqPQy1yvAcKtMxOmmUhoXEu06ohFvHmA9IG',
  remoteUri: 'https://itjoe.zendesk.com/api/v2'
});
// how many times should we hit this thing?
var n = 3000;
// SMASH IT!
smashThatLimit();

// the guts
function callback(err, req, result) {
  if (err) {
    console.dir(JSON.stringify(err));
    return;
  } else {
    console.log('all good');
  }
}
function smashThatLimit() {
  us.times(n, function() {
    console.log('running');
    zd.tickets.show(519, callback);
  });
}