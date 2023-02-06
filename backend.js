cost = 0
customersCash = 0
tillBalance = {
    "PENNY": 0.00,
    "NICKEL": 0.00,
    "DIME": 0.0,
    "QUARTER": 0.00,
    "ONE": 0,
    "FIVE": 0,
    "TEN": 0,
    "TWENTY": 0,
    "ONE HUNDRED": 000
};



function updateCost() {
    let input = document.getElementById("inputValue").value;
    // processing code here
    alert(input)
    return cost = input
}

function updateCash() {
    let input = document.getElementById("inputValue2").value;
    // processing code here
    alert(input)
    return customersCash = input
}

function PENNY() {
    let input = document.getElementById("PENNY").value;
    tillBalance.PENNY = parseFloat(input * 0.01)
}

function NICKEL() {
    let input = document.getElementById("NICKEL").value;
    tillBalance.NICKEL = parseFloat(input * 0.05)
}

function DIME() {
    let input = document.getElementById("DIME").value;
    tillBalance.DIME = parseFloat(input * 0.1)
}

function QUARTER() {
    let input = document.getElementById("QUARTER").value;
    tillBalance.QUARTER = parseFloat(input * 0.25)
}

function ONE() {
    let input = document.getElementById("ONE").value;
    tillBalance.ONE = input * 1
}

function FIVE() {
    let input = document.getElementById("FIVE").value;
    tillBalance.FIVE = input * 5
}

function TEN() {
    let input = document.getElementById("TEN").value;
    tillBalance.TEN = input * 10
}

function TWENTY() {
    let input = document.getElementById("TWENTY").value;
    tillBalance.TWENTY = input * 20
}

function ONEHUNDRED() {
    let input = document.getElementById("ONEHUNDRED").value;
    tillBalance["ONE HUNDRED"] = input * 100
}




//---------------------------Code---------------------------//
//50/50
function cashRegister(price, cash, cid) {
    // Object literal mapping the different denominations of currency to their values
    const denoms = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    // Initializing the result object
    const result = {
      status: "", // Will contain the status of the transaction: OPEN, CLOSED, INSUFFICIENT_FUNDS, or INCORRECT_PAYMENT
      change: [] // Will contain the change to be returned to the customer
    };
  
    // If the customer has not given enough money, return "INCORRECT_PAYMENT"
    if (cash < price) {
      result.status = "INCORRECT_PAYMENT";
      return result;
    }
  
    // Calculate the change due to the customer
    let changeDue = cash - price;
  
    // Calculate the total amount of cash in the drawer
    const totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
  
    // If the total amount of cash in the drawer is less than the change due, return INSUFFICIENT_FUNDS
    if (totalCid < changeDue) {
      result.status = "INSUFFICIENT_FUNDS";
      return result;
    }
  
    // If the total amount of cash in the drawer is equal to the change due, return the entire drawer and set the status to "CLOSED"
    if (totalCid === changeDue) {
      result.status = "CLOSED";
      result.change = cid;
      return result;
    }
  
    // Reverse the cid array to start from the highest denomination of currency first
    cid = cid.reverse();
  
    // Loop through each denomination in the cid array
    for (let i = 0; i < cid.length; i++) {
      const denom = cid[i][0]; // Denomination name
      const value = denoms[denom]; // Denomination value
      let count = 0; // Count of the current denomination
  
      // While there is still change due and the current denomination is available in the drawer, give the customer the maximum possible number of that denomination
      while (changeDue >= value && cid[i][1] >= value) {
        changeDue -= value;
        changeDue = Math.round(changeDue * 100) / 100; // Round off the change due to 2 decimal places
        cid[i][1] -= value;
        count++;
      }
  
      // If any of the current denomination was given to the customer, add it to the result change array
      if (count > 0) {
        result.change.unshift([denom, count * value]);
      }
    }
  
    // If there is still change due after all calculations, it means the cashier doesn't have enough change
    // so return status "INSUFFICIENT_FUNDS" and an empty change array
    if (changeDue > 0) {
      result.status = "INSUFFICIENT_FUNDS";
      result.change = [];
      return result;
    }
  
    // If there is no change due, it means the payment was correct and there is enough change to give
    // so return status "OPEN" and the calculated change
    result.status = "OPEN";
    return result;
}

function calculate(){
    let output = cashRegister(cost, customersCash, tillBalance)
    console.log(output)
    alert(output)
}


  