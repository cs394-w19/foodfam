'use strict';

const yelp = require('./node_modules/yelp-fusion');

const client = yelp.client("rskD-cUIB4NnhGMykAblkUcoYVMfah1tKpbYY7jTYN6beAkHppENDnT7es0Qw-FL0mMILOJnTNTomhre1LFcJi91sO8H10hI0tx8_wpBa92jfVCFTcsgKuv0Nhw2XHYx");

//simple search by term and location
client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log("simple search: " + response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});

//Transaction Search
client.transactionSearch('delivery', {
  location:'san diego'
}).then(response => {
  console.log("Transaction Search: " + response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});

//Phone search
client.phoneSearch({
  phone:'+14157492060'
}).then(response => {
  console.log("Phone search: " + response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});

//businesses
client.business('gary-danko-san-francisco').then(response => {
  console.log("businesses: " + response.jsonBody.name);
}).catch(e => {
  console.log(e);
});

//get reviews
client.reviews('gary-danko-san-francisco').then(response => {
  console.log("get reviews: " + response.jsonBody.reviews[0].text);
}).catch(e => {
  console.log(e);
});

//Autocomplete
client.autocomplete({
  text:'pizza'
}).then(response => {
  console.log("Autocomplete: " + response.jsonBody.terms[0].text);
}).catch(e => {
  console.log(e);
});

//Event Search (need to be enrolled in Yelp developer beta program)
client.eventSearch({
  categories:2,
  is_free:true,
  location: 'claremont, ca'
}).then(response => {
  console.log("Event Search" + response.jsonBody.events[0].name);
}).catch(e => {
  console.log(e);
});