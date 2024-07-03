// Creating a Student list using array and performing different array method operations
let studentList = [
    { name: 'Amjad', grade: 85 },
    { name: 'Furqan', grade: 92 },
    { name: 'Hayyan', grade: 77 },
    { name: 'Umme Farwa', grade: 88 },
    { name: 'Ali Mustafa', grade: 82 }
];

// Use of push method to add a new student
studentList.push({ name: 'Afzal', grade: 80 });
console.log('After push:', studentList);

// Use of pop method to remove the last student in array
let removedStudent = studentList.pop();
console.log('Removed student:', removedStudent);
console.log('After pop:', studentList);

// Use of unshift method to add a student to the beginning of array
studentList.unshift({ name: 'Ahmed', grade: 90 });
console.log('After unshift:', studentList);

// Use of shift method to remove the first student
removedStudent = studentList.shift();
console.log('Removed student:', removedStudent);
console.log('After shift:', studentList);

// Use of map method to create anew array of student names
let studentNames = studentList.map(student => student.name);
console.log('Student names:', studentNames);

// Use of filter method on array to filter the students with grades above 85
let topStudents = studentList.filter(student => student.grade > 85);
console.log('Top students:', topStudents);

// Use of reduce method to find the average grade
let averageGrade = studentList.reduce((total, student) => total + student.grade, 0) / studentList.length;
console.log('Average grade:', averageGrade);

// Use of forEach method to iterate each student
studentList.forEach(student => console.log('Student:', student));

// Use of find method to find a student by name
let foundStudent = studentList.find(student => student.name === 'Furqan');
console.log('Found student:', foundStudent);

// Use of findIndex method to find the index of a student by name
let foundIndex = studentList.findIndex(student => student.name === 'Umme Farwa');
console.log('Found index:', foundIndex);

// Use of some method to check if some students have grades below 75
let hasLowGrades = studentList.some(student => student.grade < 75);
console.log('Has low grades:', hasLowGrades);

// Use of every method to check if every student has grades above 80
let allHighGrades = studentList.every(student => student.grade > 80);
console.log('All high grades:', allHighGrades);

// Use of includes method to checking if a student with a specific name exists
let hasAliMustafa = studentNames.includes('Ali Mustafa');
console.log('Has Ali Mustafa:', hasAliMustafa);

/*Use of slice method to create a new array out of existing one by storing given position names to new list of sliced,  
it does not change the original array*/
let sliced = studentList.slice(2,4)
console.log('New Array:',sliced);

