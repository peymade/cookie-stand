'use strict';

// Creat a constructor function called Store that builds new store locations
function Store(city, minCustomer, maxCustomer, avgCookie) {
  this.city = city;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.grandTotal = 0;
  this.cookieArray = [];
}

// Array for hours of operation
  const hoursArray = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// Array for Hourly totals from all store locations combined (At footer of table)
  const totalsPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Variable for grand total of cookies sold by all locations on a given day
  let overallGrandTotal = 0;

// Global variable to store store names
let storeArray = [];


// Make a function that generates a random number based on the min and max of whatever object it is working on
Store.prototype.getRandomNumber = function () {
  let randomNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  return randomNumber;
}

// A function that loops 14 times and generates an array, which contains the hourly cookie sales, by multiplying the randomly generated customer number with the average cookies sold. It calls on the getRandomNumber prototype
Store.prototype.generateCookieArray = function() {
  for (let i = 0; i < hoursArray.length; i++) {
    let customerNum = this.getRandomNumber();
    let hourTotal = Math.floor(this.avgCookie * customerNum);
    this.grandTotal += hourTotal;
    this.cookieArray.push(hourTotal);
    // This replaces the array value at the index number with a new number that adds on the new hourly total. 
    totalsPerHour[i] = hourTotal + totalsPerHour[i];
    // console.log(this.cookieArray);
    // console.log(totalsPerHour);
  } 
  // Add the total cookies for this location to the overall total of all locations
  overallGrandTotal += this.grandTotal;
  storeArray.push(this.city);
}

let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);

Seattle.generateCookieArray();
Tokyo.generateCookieArray();
Dubai.generateCookieArray();
Paris.generateCookieArray();
Lima.generateCookieArray();

console.log(storeArray);


//Access div in which table will live
const cookieDivElem = document.getElementById('cookieOutput');

// Make overall Table
const tableElem = document.createElement('table');
cookieDivElem.appendChild(tableElem);

// Header function
function tableHeader(){
  
  // Create header row 
  const trHeadElem = document.createElement('tr');
  tableElem.appendChild(trHeadElem);
  // Create and add empty first cell
  const thEmptyElem = document.createElement('th');
  thEmptyElem.textContent = "";
  trHeadElem.appendChild(thEmptyElem);

  // For every value in the hours array, add a new cell with that time
  for (let k = 0; k < hoursArray.length; k++) {
    const thTimeElem = document.createElement('th');
    thTimeElem.textContent = hoursArray[k];
    trHeadElem.appendChild(thTimeElem);
  }

  //Add on area for daily Totals
  const thElem = document.createElement('th');
  thElem.textContent = 'Daily Total';
  trHeadElem.appendChild(thElem);

}




//Make new row with data for each Store
Store.prototype.render = function() {

  // New row for new Store. Only do once, outside of for loop
  const trElem = document.createElement('tr');
  tableElem.appendChild(trElem);

  // Cell Containing name of Store, Only do once. 
  const tdNameElem = document.createElement('td');
  tdNameElem.textContent = this.city;
  trElem.appendChild(tdNameElem);

  for (let j = 0; j < this.cookieArray.length; j++) {

    // Add new td each time for loop goes
    const tdElem = document.createElement('td');
    tdElem.textContent = this.cookieArray[j];
    trElem.appendChild(tdElem);
    // console.log(tdElem);

  }

  // Add last cell with overall daily total for the store
  const tdElem = document.createElement('td');
  tdElem.textContent = this.grandTotal;
  trElem.appendChild(tdElem);
}




function tableFooter(){
  
  // Create footer row 
  const trFooterElem = document.createElement('tr');
  tableElem.appendChild(trFooterElem);
  // Create and add 'Total' title for the row
  const thTotalElem = document.createElement('th');
  thTotalElem.textContent = 'Total';
  trFooterElem.appendChild(thTotalElem);

  // For every value in the hours array, add a new cell with that hourly total
  for (let k = 0; k < totalsPerHour.length; k++) {
    const thElem = document.createElement('th');
    thElem.textContent = totalsPerHour[k];
    trFooterElem.appendChild(thElem);
  }

  // Add the grand total of all locations as the last cell
  const thElem = document.createElement('th');
  thElem.textContent = overallGrandTotal;
  trFooterElem.appendChild(thElem);

}


// Run functions to create table header, all table rows, and the footer. 
tableHeader();
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
tableFooter();
