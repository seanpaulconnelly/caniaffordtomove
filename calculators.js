// FIXED COSTS

// Vehicles

function vehiclesShipped(numberOfVehicles, shippingCost) {
  return shippingCost * numberOfVehicles;
}

function vehiclesDriven(numberOfVehicles, milesToDrive, milesPerGallon, pricePerGallon) {
  return numberOfVehicles * (milesToDrive / milesPerGallon) * pricePerGallon;
}

function vehicleRegistration(numberOfVehicles, registrationPrice) {
  return numberOfVehicles * registrationPrice;
}

function peopleDriving(numberOfPeople, daysDriven, dailyFoodCost, dailyLodgingCost, totalMiscCosts) {
  var totalDailyCosts = (dailyFoodCost + dailyLodgingCost) * daysDriven;
  return totalDailyCosts * numberOfPeople + totalMiscCosts;
}


// Belongings

function hourlyMovers(numberOfHours, pricePerHour) {
  return numberOfHours * pricePerHour;
}

function shippingPerPound(pricePerPound, totalPounds) {
  return pricePerPound * totalPounds;
}

function hiredHands(numberOfPeople, hourlyPay, numberOfHours) {
  return numberOfPeople * hourlyPay * numberOfHours;
}

function flatRate(cost) {
  return cost;
}

// CRUD a per-room budget & display the total
var budgetPerRoom = []
function addRoomToBudget(roomName, budget) {
  budgetPerRoom.push([roomName, budget]);
  return console.log(roomName + ' added');
}
function viewRoomName(index, includeBudget) {
  if(includeBudget == true) {
    return console.log(budgetPerRoom[index][0] + ' ' + budgetPerRoom[index][1]);
  } else {
    return console.log(budgetPerRoom[index][0]);
  }
}
function editRoomBudget(index, newName, newBudget) {
  budgetPerRoom[index][0] = newName;
  budgetPerRoom[index][1] = newBudget;
  return console.log('Room updated');
}
function removeRoomFromBudget(index) {
  roomName = budgetPerRoom[index][0];
  budgetPerRoom.splice(index, 1);
  return console.log(roomName + ' removed');
}
function sumTotalRoomBudgets() {
  var totalBudget = 0;
  for(var i = 0; i < budgetPerRoom.length; i++) {
    totalBudget += budgetPerRoom[i][1];
  }
  return console.log(totalBudget);
}


// New place

function houseDownpayment(percentDown, housePrice) {
  return housePrice * (percentDown / 100);
}

function rentalDeposit(depositAmount){
  return depositAmount;
}


// Flying

function peopleFlying(numberOfPeople, pricePerTicket, totalMiscCosts) {
  return numberOfPeople * pricePerTicket + totalMiscCosts;
}
