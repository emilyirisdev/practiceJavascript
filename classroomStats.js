function addGrade(grades, grade) {
    grades.push(grade)
    return grades
}

function getNumberOfGrades(grades) {
    return grades.length
}

function getFirstGrade(grades) {
    return grades[0]
}

function getLastGrade(grades) {
    return grades[grades.length - 1]
}
