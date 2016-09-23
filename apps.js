var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
//name, employee id, salary, rating

function Person(employee) {
  this.name = employee[0];
  this.employeeId = employee[1];
  this.salary = employee[2];
  this.rating = employee[3];
}

atticus = new Person (atticus);
jem = new Person (jem);
boo = new Person (boo);
scout = new Person (scout);
var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++){
  var report = employeeReport(employees[i]);
  console.log(report);
}

function employeeReport(employee){

  var employeeName = employee.name;
  var employeeId = employee.employeeId;
  var salary = parseInt(employee.salary);
  var rating = employee.rating;
  var bonus = 0;

  var output = {};
  output.name = employeeName;
  bonus = calcBonus(rating, employeeId, salary);
  output.bonus = bonus;
  output.totalSalary = salary + (bonus * salary);
  output.bonusAmount = Math.round(bonus * salary);

  return output;
}

function calcBonus(rating, employeeId, salary){
  var bonus = 0;

  switch(rating){
    case 5:
      bonus = 0.1;
      break;
    case 4:
      bonus = 0.06;
      break;
    case 3:
      bonus = 0.04
      break;
    default:
      bonus = 0;

  }

  if (employeeId.length == 4){
    bonus += 0.05;
  }


  if(salary > 65000){
    bonus -= 0.01;
  }

  if(bonus > 0.13){
    bonus = 0.13;
  }
  return bonus;
}

// Write a function that takes in one employee array (as an argument to the function), and returns another array:
//
// The first index should also contain the employee's name.
// The second index should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// The third index should be the adjusted annual compensation (base annual + bonus)
// The fourth index should be the employee's total bonus rounded to the nearest dollar.
// Finally, iterate over the employees array and
//
// use each employee array as input to your first function
// console.log the results of each iteration.
// Individual Bonus calculation
//
// Those who have a rating of a 2 or below should not receive a bonus.
// Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// If they have 4 employee numbers, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
// However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// No bonus can be above 13% total.



//
// var arrayAtticus = ["Atticus", "2405", "47000", 3];  9% bonus, 4230, totalsalary = 51230
// var arrayJem = ["Jem", "62347", "63500", 4];  6% bonus, 3810, totalsalary = 67310
// var arrayBoo = ["Boo", "11435", "54000", 3];   4% bonus, 2160, total salary = 56160
// var arrayScout = ["Scout", "6243", "74750", 5];  13% bonus, 9716, total salary = 84467.50

// Each employee array should become an instance of an object (probably called something like Person).
// This will also mean that you need to adjust the rest of the logic to accept properties rather than array index.
// The original employees array that was used to store each person does not need to be converted to an object.
//Meaning that you can put your new Person objects inside of an array.
// Once you are complete, post to GitHub and submit via this app.
