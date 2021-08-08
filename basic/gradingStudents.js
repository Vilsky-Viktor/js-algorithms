/*
HackerRank problem
My web-site http://upmate.io

HackerLand University has the following grading policy:
- Every student receives a grade in the inclusive range from 0 to 100.
- Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's  according to these rules:
- If the difference between the grade and the next multiple of 5 is less than 3,
round grade up to the next multiple of 5.
- If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

Return the grades after rounding as appropriate
 */

const grades = [73, 67, 38, 33]

function gradingStudents(grades) {
    // if value is greater or equal 38 and remainder of val divided by 5 is greater than 2 return value + 5 - remainder
    // otherwise return value
    return grades.map(val => (val >= 38 && val % 5 > 2) ? val += 5 - val % 5 : val)
}

console.log(gradingStudents(grades))