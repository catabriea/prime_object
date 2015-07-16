//1) math.round
//2) return base percent was at 1 ... shouldn't be there - REMOVED
//3) add [i] in calculateSti array[i]
// Three Bugs



function Employee(name, employeeNumber, salary, reviewScore ){
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.salary = salary;
  this.reviewScore = reviewScore;
}

var atticus = new Employee("Atticus", "2405", "47000", 3);
var jem = new Employee("Jem", "62347", "63500", 4);
var boo = new Employee("Boo", "11435", "54000", 3);
var scout = new Employee("Scout", "6243", "74750", 5);

var array = [Atticus, Jem, Boo, Scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'

for(var i = 0; i < array.length; i++) {
	 array[i] = calculateSTI(array[i]);
 	 newEl = document.createElement('li');
	 newText = document.createTextNode(array[i]);
	 newEl.appendChild(newText);
	 position.appendChild(newEl);
}

function calculateSTI(empObject){
  var newArray = [];

  newArray[0] = empObject.name;

  var employeeNumber = empObject.employeeNumber;
  var baseSalary = empObject.baseSalary;
  var reviewScore = empPbject.reviewScore;


  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2]= baseSalary * (1.0 + bonus);
  newArray[3] = Math.round(baseSalary * bonus);
  

  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}


function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}