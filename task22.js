/*
44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */
let toppingDefault = ['cheez', 'salad'];
function sandwichMaker(toppingDefault, ...toppings) {
    return `${toppingDefault?.join(" and ")} along with ${toppings.join(",")} are added to your Sanwitch to make it special for you.`;
    // return toppingDefault +"and "+ toppings.join(",")+ ' are added to your sandwitch';
}
let s1 = sandwichMaker(toppingDefault, 'chicken');
console.log(s1);
let s2 = sandwichMaker(toppingDefault, 'bbq', 'fish');
console.log(s2);
let s3 = sandwichMaker(toppingDefault, 'vegitable', 'chicken');
console.log(s3);
let s4 = sandwichMaker(toppingDefault);
console.log(s4);
export {};
