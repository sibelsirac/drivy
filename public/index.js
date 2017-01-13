'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];
function getDateDiff(time1, time2) {
  var str1= time1.split('-');
  var str2= time2.split('-');

  //                yyyy   , mm       , dd
  var t1 = new Date(str1[0], str1[1]-1, str1[2]);
  var t2 = new Date(str2[0], str2[1]-1, str2[2]);

  var diffMS = t1 - t2;    

  var diffS = diffMS / 1000;    

  var diffM = diffS / 60;
  var diffH = diffM / 60;
  var diffD = diffH / 24;
  return diffD;
}
function price_rental(cars,rentals){
var priceday;
var pricekm;
for (var i = 0, c = rentals.length; i < c; i++) {

for (var j =0, d=cars.length;j<d;j++){
if(rentals[i].carId = cars[j].id){
priceday=cars[j].pricePerDay;
pricekm=cars[j].pricePerKm;
}
}
    rentals[i].price=(getDateDiff(rentals[i].returnDate,rentals[i].pickupDate)+1)*priceday + rentals[i].distance*pricekm;
		
}

}
function price_rental_bis(cars,rentals){
var priceday;
var pricekm;
for (var i = 0, c = rentals.length; i < c; i++) {

for (var j =0, d=cars.length;j<d;j++){
if(rentals[i].carId = cars[j].id){
priceday=cars[j].pricePerDay;
pricekm=cars[j].pricePerKm;
}
}
var date =getDateDiff(rentals[i].returnDate,rentals[i].pickupDate) + 1;

if(date>1 && date<=4){
priceday=priceday*0.9;
}
else if(date>4 && date<=10){
priceday=priceday*0.7;
}
else if(date>10){
priceday=priceday*0.5;
}
    rentals[i].price=date *priceday + rentals[i].distance*pricekm;
		
}

}
function commission(rentals){
for (var i = 0, c = rentals.length; i < c; i++) {
var date =getDateDiff(rentals[i].returnDate,rentals[i].pickupDate) + 1;
var com=0.3*rentals[i].price;
rentals[i].commission.insurance=0.5*com;
rentals[i].commission.assistance=date;
rentals[i].commission.drivy= 0.5*com - date ;

}
}
function deductible(rentals){
for (var i = 0, c = rentals.length; i < c; i++) {
var date =getDateDiff(rentals[i].returnDate,rentals[i].pickupDate) + 1;
if(rentals[i].options.deductibleReduction==true){
rentals[i].price=rentals[i].price + 4*date;
rentals[i].commission.drivy=rentals[i].commission.drivy+4*date;
}
}
}
function actor(actors,rentals){
var date;
var price;
var insurance;
var assistance;
var drivy;
for (var i = 0, c = actors.length; i < c; i++) {

for (var j =0, d=rentals.length;j<d;j++){
if(actors[i].rentalId == rentals[j].id){
price=rentals[j].price;
 date =getDateDiff(rentals[j].returnDate,rentals[j].pickupDate) + 1;
insurance=rentals[j].commission.insurance;
assistance=rentals[j].commission.assistance;
drivy=rentals[j].commission.drivy;
}
}

for (var z = 0, l = actors[i].payment.length; z < l; z++){
if(actors[i].payment[z].who == "driver"){
actors[i].payment[z].amount=price;
}
else if(actors[i].payment[z].who == "owner"){
actors[i].payment[z].amount=price*0.7;
}
else if(actors[i].payment[z].who == "insurance"){
actors[i].payment[z].amount=insurance;
}
else if(actors[i].payment[z].who == "assistance"){
actors[i].payment[z].amount=assistance;
}
else if(actors[i].payment[z].who == "drivy"){
actors[i].payment[z].amount=drivy;

}}
}
}
console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
price_rental(cars, rentals);
//console.log("exercice1");
//console.log(rentals);

price_rental_bis(cars, rentals);
console.log("exercice2");
console.log(rentals);
commission(rentals);
console.log("exercice3");
console.log(rentals);
deductible(rentals);
console.log("exercice4");
console.log(rentals);
actor(actors,rentals);
console.log("exercice5");
console.log(actors);

