// Problem 1
var empOne = {
    "firstName": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raiseEligible": true,
    "wfh": true
}

var empTwo = {
    "firstName": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raiseEligible": true,
    "wfh": false
}

var empThree = {
    "firstName": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raiseEligible": false,
    "wfh": false
}

console.log(empOne, empTwo, empThree)

// Problem 2
var company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": ["Sam", "Mary", "Bill"],
    "wfh": []
}

console.log(company)

// Problem 3
var empFour = {
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseEligible": false,
    "wfh": true
}

company.employees.push("Anna")

console.log(empFour, company)

// Problem 4
var totalSalary = empOne.salary + empTwo.salary + empThree.salary + empFour.salary

console.log(totalSalary)

// Problem 5
if (empOne.raiseEligible == true) {
    empOne.salary = empOne.salary * 1.1
    empOne.raiseEligible = false
}

if (empTwo.raiseEligible == true) {
    empTwo.salary = empTwo.salary * 1.1
    empTwo.raiseEligible = false
}

if (empThree.raiseEligible == true) {
    empThree.salary = empThree.salary * 1.1
    empThree.raiseEligible = false
}

if (empFour.raiseEligible == true) {
    empFour.salary = empFour.salary * 1.1
    empFour.raiseEligible = false
}

console.log(empOne, empTwo, empThree, empFour)

// Problem 6
company.wfh.push("Anna")
company.wfh.push("Sam")

console.log(company)