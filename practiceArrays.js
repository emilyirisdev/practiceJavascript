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
