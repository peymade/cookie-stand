'use strict';

// Global Items

//Function randomizing number of hourly customers
function randomCustomerNum(min, max){
  return Math.floor(Math.random() *(max - min +1) + min);
}

// NEXT ROUND = creatre constandt global array for 6am, 7am, 8am, etc. 

// Objects for Locations

// Each object contains the location of the store as a string, the minimum and maximum hourly customers, the average cookies per customer, and a randomized number of hourly customers based on the min and max. 

// SEATTLE

const Seattle = {
  location: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  customerNum: 0,
  cookieStats: [],
  dailyTotal: 0,
  // ADDED
  hoursofOperation: ['6am, 7am;];
  
  // This function sets the number of customers equal to a randomized value between the min and max. The randomizing function lives outside the object. 
  getCustomerNum: function() {
        this.customerNum = randomCustomerNum(this.minCustomer,this.maxCustomer);
  },

  getCookieStats: function() {

    // Start a for loops that runs 14 times. 
    for (let i=0; i <=13; i++){

      // Generate a random number of customers
      Seattle.getCustomerNum();

      // Set the total cookies for the hour equal to the average times the number of customers
      let hourTotal = Math.floor(this.avgCookie * this.customerNum);

      // This will make the string, depending on what i is, which will calculate how to write out the time of day. 
      if (i===6){
        this.cookieStats.push(`${i+6} pm: ${hourTotal} cookies`);
      } else if (i>6) {
        this.cookieStats.push(`${i-6} pm: ${hourTotal} cookies`);
      } else {
        this.cookieStats.push(`${i+6} am: ${hourTotal} cookies`);
    } 
    // Add the generated hourly total of cookies to the daily total
    this.dailyTotal = hourTotal + this.dailyTotal;
  }
    // Add the final daily total to the array
    this.cookieStats.push('Total: ' + this.dailyTotal+ ' cookies');

    // Set cookieStats array equal to the array just generated
    this.cookieStats = this.cookieStats;
    console.log(this.cookieStats);
  } 
}

function generateSalesArray(location){
  location.dailyTotal = 0;
  location.hourlySalesArray - [];
  let customers = location.randomNumCustomers;
  let cookiesSold = Math.floor()
  location.grandTotal += cookiesSold;

  location.hourlySalesArray.push(location.)

}

// Run the code to generate the array
Seattle.getCookieStats();

// TOKYO

const Tokyo = {
  location: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  customerNum: 0,
  customerNum: 0,
  cookieStats: [],
  dailyTotal: 0,
  
  // This function sets the number of customers equal to a randomized value between the min and max. The randomizing function lives outside the object. 
  getCustomerNum: function() {
        this.customerNum = randomCustomerNum(this.minCustomer,this.maxCustomer);
  },

  getCookieStats: function() {

    // Start a for loops that runs 14 times. 
    for (let i=0; i <=13; i++){

      // Generate a random number of customers
      Tokyo.getCustomerNum();

      // Set the total cookies for the hour equal to the average times the number of customers
      let hourTotal = Math.floor(this.avgCookie * this.customerNum);

      // This will make the string, depending on what i is, which will calculate how to write out the time of day. 
      if (i===6){
        this.cookieStats.push(`${i+6} pm: ${hourTotal} cookies`);
      } else if (i>6) {
        this.cookieStats.push(`${i-6} pm: ${hourTotal} cookies`);
      } else {
        this.cookieStats.push(`${i+6} am: ${hourTotal} cookies`);
    } 
    // Add the generated hourly total of cookies to the daily total
    this.dailyTotal = hourTotal + this.dailyTotal;
  }
    // Add the final daily total to the array
    this.cookieStats.push('Total: ' + this.dailyTotal+ ' cookies');

    // Set cookieStats array equal to the array just generated
    this.cookieStats = this.cookieStats;
    console.log(this.cookieStats);
  } 
}

// Run the code to generate the array
Tokyo.getCookieStats();

// DUBAI

const Dubai = {
  location: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  customerNum: 0,
  cookieStats: [],
  dailyTotal: 0,
  
  // This function sets the number of customers equal to a randomized value between the min and max. The randomizing function lives outside the object. 
  getCustomerNum: function() {
        this.customerNum = randomCustomerNum(this.minCustomer,this.maxCustomer);
  },

  getCookieStats: function() {

    // Start a for loops that runs 14 times. 
    for (let i=0; i <=13; i++){

      // Generate a random number of customers
      Dubai.getCustomerNum();

      // Set the total cookies for the hour equal to the average times the number of customers
      let hourTotal = Math.floor(this.avgCookie * this.customerNum);

      // This will make the string, depending on what i is, which will calculate how to write out the time of day. 
      if (i===6){
        this.cookieStats.push(`${i+6} pm: ${hourTotal} cookies`);
      } else if (i>6) {
        this.cookieStats.push(`${i-6} pm: ${hourTotal} cookies`);
      } else {
        this.cookieStats.push(`${i+6} am: ${hourTotal} cookies`);
    } 
    // Add the generated hourly total of cookies to the daily total
    this.dailyTotal = hourTotal + this.dailyTotal;
  }
    // Add the final daily total to the array
    this.cookieStats.push('Total: ' + this.dailyTotal+ ' cookies');

    // Set cookieStats array equal to the array just generated
    this.cookieStats = this.cookieStats;
    console.log(this.cookieStats);
  } 
}

// Run the code to generate the array
Dubai.getCookieStats();



// PARIS

const Paris = {
  location: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  customerNum: 0,
  cookieStats: [],
  dailyTotal: 0,
  
  // This function sets the number of customers equal to a randomized value between the min and max. The randomizing function lives outside the object. 
  getCustomerNum: function() {
        this.customerNum = randomCustomerNum(this.minCustomer,this.maxCustomer);
  },

  getCookieStats: function() {

    // Start a for loops that runs 14 times. 
    for (let i=0; i <=13; i++){

      // Generate a random number of customers
      Paris.getCustomerNum();

      // Set the total cookies for the hour equal to the average times the number of customers
      let hourTotal = Math.floor(this.avgCookie * this.customerNum);

      // This will make the string, depending on what i is, which will calculate how to write out the time of day. 
      if (i===6){
        this.cookieStats.push(`${i+6} pm: ${hourTotal} cookies`);
      } else if (i>6) {
        this.cookieStats.push(`${i-6} pm: ${hourTotal} cookies`);
      } else {
        this.cookieStats.push(`${i+6} am: ${hourTotal} cookies`);
    } 
    // Add the generated hourly total of cookies to the daily total
    this.dailyTotal = hourTotal + this.dailyTotal;
  }
    // Add the final daily total to the array
    this.cookieStats.push('Total: ' + this.dailyTotal+ ' cookies');

    // Set cookieStats array equal to the array just generated
    this.cookieStats = this.cookieStats;
    console.log(this.cookieStats);
  } 
}

// Run the code to generate the array
Paris.getCookieStats();


// LIMA

const Lima = {
  location: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  customerNum: 0,
  cookieStats: [],
  dailyTotal: 0,
  
  // This function sets the number of customers equal to a randomized value between the min and max. The randomizing function lives outside the object. 
  getCustomerNum: function() {
        this.customerNum = randomCustomerNum(this.minCustomer,this.maxCustomer);
  },

  getCookieStats: function() {

    // Start a for loops that runs 14 times. 
    for (let i=0; i <=13; i++){

      // Generate a random number of customers
      Lima.getCustomerNum();

      // Set the total cookies for the hour equal to the average times the number of customers
      let hourTotal = Math.floor(this.avgCookie * this.customerNum);

      // This will make the string, depending on what i is, which will calculate how to write out the time of day. 
      if (i===6){
        this.cookieStats.push(`${i+6} pm: ${hourTotal} cookies`);
      } else if (i>6) {
        this.cookieStats.push(`${i-6} pm: ${hourTotal} cookies`);
      } else {
        this.cookieStats.push(`${i+6} am: ${hourTotal} cookies`);
    } 
    // Add the generated hourly total of cookies to the daily total
    this.dailyTotal = hourTotal + this.dailyTotal;
  }
    // Add the final daily total to the array
    this.cookieStats.push('Total: ' + this.dailyTotal+ ' cookies');

    // Set cookieStats array equal to the array just generated
    this.cookieStats = this.cookieStats;
    console.log(this.cookieStats);
  } 
}

// Run the code to generate the array
Lima.getCookieStats();





// Create an array of all Store names
const storeArray = [Seattle, Tokyo, Dubai, Paris, Lima]


// Create a const variable of the div with the id 'Cookie Output'
const cookieOutput = document.getElementById("cookieOutput");
// Create a const that is a new element of an article tag 
const article = document.createElement('article'); 
// Go to cookieOutput and add an article element within it as a child
cookieOutput.appendChild(article);


// Display the arrays as an unordered list 

// Iterate through the array of location names using a for loop 
  for (let j=0; j < storeArray.length; j++) {
    let currentStore = storeArray[j];
  
    console.log(currentStore);
  
  // Create an h2 element 
  const h2Elem = document.createElement('h2');
  // add location name to the element
  h2Elem.textContent = currentStore.location;
  // Add the h2element as a child in the article
  article.appendChild(h2Elem);

  // Make ul element
  const ulElem = document.createElement('ul');
  article.appendChild(ulElem);
  
  for (let k=0; k<currentStore.cookieStats.length; k++){
    // create an li 
    const liElem = document.createElement('li');
    // add text content that matches the store's cookie output at that index in the array
    liElem.textContent = `${currentStore.cookieStats[k]}`;
    // append li to ul
    ulElem.appendChild(liElem);
  }

  }

  for (let j=0; j<location.hourlyArray.length; j++){
    // create an li 
    const liElem = document.createElement('li');
    // add text content that matches the store's cookie output at that index in the array
    liElem.textContent = `${location.hourlyArray[k]}` : ;
    // append li to ul
    ulElem.appendChild(liElem);
  }

  }
  

  ${hourlyArray} : 