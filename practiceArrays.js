let grades = [10, 5, 13]
let firstGrade = grades[0]
console.log(firstGrade)

let grades = [10, 5, 13]
let secondGrade = grades[1]
console.log(secondGrade)

let temperatures = [-5, 12, 15, 18, 13]
let value = temperatures[2]
console.log(value)

function getFullName(names) {
return `${names[0]} ${names[1]}`
}

function describeShopLocation(coordinates) {
return `The shop is located at ${coordinates[0]}, ${coordinates[1]}`
}

function describeShopLocation(shop, coordinates) {
return `The ${shop} is located at ${coordinates[0]}, ${coordinates[1]}`
}

function incrementFirstTemperature(temperatures) {
temperatures[0] = temperatures[0] + 1 
return temperatures
}

function getCount(items) {
return items.length
}

function getMessage(items) {
return `You have ${items.length} items`
}

function getLastTemperatureMessage(temperatures) {
return `The last temperature is at position ${temperatures.length-1}`
}

function getLastGrade(grades) {
return grades[grades.length - 1]
}

function addGrade(grades) {
grades.push(18)
return grades
}

function addTemperature(temperatures) {
temperatures.push(-6)
return temperatures
}

function isTestTooEasy(grades) {
return grades.includes(20)
}

function convertToString(grades) {
return grades.join(";")
}

function convertToString(grades) {
return grades.join(" & ")
}

function exportCSV(grades) {
return grades. join(", ")
}

let numbers = [05, 15, 25, 35, 45]

numbers.forEach(function(number) {
console.log(number)
})

let temperatures = [-3, 7, 11, 14, 23]

temperatures.forEach(function(temperature) {
console.log(temperature)
})

let grades = [30, 26, 17, 23]

grades.forEach(function(grade) {
    console.log(grade)
})
