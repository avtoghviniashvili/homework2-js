//N1
for (let i = 5; i <= 100; i++) {
    console.log(i);
}


//N2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < array1.length; i++) {
    let Number = array1[i];

    if (Number > 0 && Number < 10) {
        console.log(Number);
    }
}

//N3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 5) {
        console.log('არის');
        break;
    }
}
//N4
let array3 = [1, 2, 3, 4, 5];

let sum = 0

for (let add = 0; add < array3.length; add++) {
    sum = sum + array3[add]
}
console.log(sum);

//N5
let array4 = [1, 2, 3, 7, 6, 9];

let sum2 = 0;

for (let average = 0; average < array4.length; average++) {
    sum2 = sum2 + array4[average]
}

console.log(sum2 / array4.length);

//N6
let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array5.length; i++) {
    if (array5[i] != 7) {
        console.log(array5[i]);
    }
}

//N7
let user = {
    firstname: "avto",
    lastname: "ghviniashvili",
    age: 19,
    studentstatus: "active"
};

console.log(user.studentstatus);

//N8
let user2 = {
    name: 'avto',
    age: 19,
    studentstatus: 'active'
}

if (user2.age < 18 && user2.studentstatus == "active") {
    console.log("hello");
}
else {
    console.log("error");
}

if (user2.name == "levani") {
    console.log("hello levani");
}
else {
    console.log("error");
}

if (user2.studentstatus == "active" || user2.age < 25) {
    console.log("hello world");
}
else {
    console.log("error");
}


//N9

let array = [  [2, -3, 5, 10],  [25, -24, -11, 100],  [-6, -7, 10] ];

for (let i = 0; i < array.length; i++) {
    for (let a = 0; a < array[i].length; a++) {
        if (array[i][a] > 0) {
            console.log(array[i][a]);
        }
    }
}

//N10 ?


//n11
let users = [
    { username: 'giorgi', status: false },
    { username: 'levani', status: false },
    { username: 'anna', status: true }
]


if (users[0].status == true) {
    console.log(users[0]);
}
if (users[1].status == true) {
    console.log(users[1]);
}
if (users[2].status == true) {
    console.log(users[2]);
}


