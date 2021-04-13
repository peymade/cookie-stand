
const Seattle = {
  location: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  customerNum: 0,
  cookieStats: [],
  
  // This function sets the number of customers equal to a randomized value between the min and max. The randomizing function lives outside the object. 
  getCustomerNum: function() {
    console.log(this.customerNum);
    this.customerNum = randomCustomerNum(this.minCustomer,this.maxCustomer);
    console.log(this.customerNum);
  },
}

Seattle.getCustomerNum();