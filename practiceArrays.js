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

let temperatures = [-27, -19, -8, 3, 6]

temperatures.forEach(function (temperature) {
    console.log(temperature)
})

let numbers = [7, 28, 14, 21]

numbers.forEach(function(number) {
    console.log(number)
})

let ids = [847, 935, 296, 721, 655, 432]

ids.forEach(function(id) {
    console.log(id)
})

let grades = [20, 36, 28, 30]

let sum = 0
grades.forEach(function(grade) {
    console.log(grade)
    sum = sum + grade
    return sum
})

let numbers = [9, 27, 18, 36, 49]

let sum = 0
numbers.forEach(function(number) {
    console.log(number)
    sum = sum + number
    return sum
})

let temperatures = [-3, 7, 21, 14, 23]

let total = 0

temperatures.forEach(function(temperature) {
    total = total + temperature
})
console.log(total)

function calculateTotal(numbers) {
let sum = 0
numbers.forEach(function(number) {
    sum = sum + number
})
return sum
}

export function getSumOfGrades(grades) {
let sum = 0
grades.forEach(function(grade) {
    sum += grade
})
return sum
}

export function getAverageGrade(grades) {
let sum = 0
grades.forEach(function(grade) {
    sum += grade
})
return sum / grades.length
}

function sumGradesAbove10(grades) {
let sum = 0
grades.forEach(function(grade) {
    if (grade >= 10) {
        sum = sum + grade
    }
})
return sum
}

function sumNonFreezingTemperatures(temperatures) {
let sum = 0
temperatures.forEach(function(temperature) {
    if(temperature > 0) {
        sum += temperature
    }
})
return sum
}

function tripleGrades(grades) {
return grades.map(function(grade) {
    return grade * 3
})
}
console.log(tripleGrades)

function doubleNumbers(numbers) {
return numbers.map(function(grade){
    return grade * 2
})
}

function raiseTemperatures(temperatures) {
return temperatures.map(function(temperature) {
    return temperature + 5
})
}

let grades = [10, 5, 15, 20]
let sum = grades.reduce(function(total, current) {
    return total + current
}, 0)

function sumNumbers(numbers) {
return numbers.reduce(function(total, current) {
    return total + current
}, 0)
}

function multiplyNumbers(numbers) {
return numbers.reduce(function(total, current) {
    return total * current
}, 1)
}

