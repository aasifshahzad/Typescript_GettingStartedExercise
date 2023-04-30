/* 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
// let favorite_fruits: string[] = ['apple','banana','orange']
// const found = favorite_fruits.find(element => element == 'orage')
// if (found == 'apple') {
//     console.log(`I'm in love eating ${found}`);
// } else if (found == 'banana') {
//     console.log(`I'm in love eating ${found}`);
// } else if (found == 'orange') {
//     console.log(`I'm in love eating ${found}`);
// } else if (found == undefined){
//     console.log(`I don't like eating this fruit`);
// }
/*
30. Hello Admin: Make a array of five or more usernames, including the name 'admin'.
 Imagine you are writing code that will print a greeting to each user after they log in to a website.
 Loop through the array, and print a greeting to each user:
 • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
 • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
//  let usernames : string[] = ['admin','asif','jhon','ysra','nasir',]
//  for (let index = 0; index < usernames.length; index++) {
//     const element = usernames[index];
//     if (element == 'admin') {
//         console.log(`Hello ${element.toUpperCase()}, would you like to see a status reports?`);
//     } else {
//         console.log(`Hello ${element.toUpperCase()}, thank you for logging in again.`);
//     }
//  }
/* 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
//  let usernames : string[] = ['admin','asif','jhon','ysra','nasir',]
// // let usernames : string[] = []
//  if (usernames.length == 0) {
//     console.log("We need to find some users!");
//  } else {
//     for (let index = 0; index < usernames.length; index++) {
//         const element = usernames[index];
//         if (element == 'admin') {
//             console.log(`Hello ${element.toUpperCase()}, would you like to see a status reports?`);
//         } else {
//             console.log(`Hello ${element.toUpperCase()}, thank you for logging in again.`);
//         }
//     } 
//  }
/* 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
let current_users = ['Admin', 'jhon', 'ysra', 'Nasir', 'Nany'];
let new_users = ['thoMSon', 'jhon', 'YolLo', 'nasir', 'Kims'];
let current_users_lower = current_users.map(element => element.toLowerCase());
//console.log(current_users_lower);
let new_users_lower = new_users.map(element => element.toLowerCase());
//console.log(new_users_lower);
for (let x = 0; x < new_users_lower.length; x++) {
    const name = new_users_lower[x];
    //console.log(name);
    if (current_users_lower.find(element => element == name)) {
        //console.log("Try another user name");
        console.log(`"${name}"  username is not avaliable`);
    }
    else {
        console.log(`"${name}" username is available.`);
    }
}
export {};
