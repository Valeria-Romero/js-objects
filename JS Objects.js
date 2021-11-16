// CHALLENGE 1
console.log("Challenge 1");

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printStudentsInfo(students){
    for(students of students){
        console.log("Name: " + students.name + ", Cohort: " + students.cohort);
    }
}

printStudentsInfo(students);

console.log("--------------------------------------------------------")

// CHALLENGE 2
console.log("Challenge 2");

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};


function userInfo(users){
    for (const key in users) {
        console.log(key.toUpperCase());
        for(let i =0; i< users[key].length; i++){
            let number = i + 1;
            let firstName = users[key][i].first_name.toUpperCase();
            let lastName = users[key][i].last_name.toUpperCase();
            let lengthOfInfo = firstName.length + lastName.length;
            console.log(number + " - " + lastName + ", " + firstName + " - " + lengthOfInfo); 
        }
    }
}

userInfo(users);
