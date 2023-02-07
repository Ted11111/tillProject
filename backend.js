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




function cashRegister(price, cash, cid) {
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

  const result = {
    status: "",
    change: []
  };

  if (cash < price) {
    result.status = "INCORRECT_PAYMENT";
    return result;
  }

  let changeDue = cash - price;

  let totalCid = 0;
  cid.forEach((denom) => {
    totalCid += denom[1];
  });

  if (totalCid < changeDue) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  if (totalCid === changeDue) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }

  cid = cid.reverse();

  for (let i = 0; i < cid.length; i++) {
    const denom = cid[i][0];
    const value = denoms[denom];
    let count = 0;

    while (changeDue >= value && cid[i][1] >= value) {
      changeDue -= value;
      changeDue = Math.round(changeDue * 100) / 100;
      cid[i][1] -= value;
      count++;
    }

    if (count > 0) {
      result.change.unshift([denom, count * value]);
    }
  }

  if (changeDue > 0) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  }

  result.status = "OPEN";
  return result;
}


function calculate(){
    let output = cashRegister(cost, customersCash, tillBalance)
    console.log(output)
    alert(output)
}


  