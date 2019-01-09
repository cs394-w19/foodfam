'use strict';

const yelp = require('./node_modules/yelp-fusion');

const client = yelp.client("rskD-cUIB4NnhGMykAblkUcoYVMfah1tKpbYY7jTYN6beAkHppENDnT7es0Qw-FL0mMILOJnTNTomhre1LFcJi91sO8H10hI0tx8_wpBa92jfVCFTcsgKuv0Nhw2XHYx");

client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});