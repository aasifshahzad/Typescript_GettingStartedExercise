/*
44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */

let toppingDefault : string[] = ['cheez','salad'];
function sandwichMaker(toppingDefault?:string[] , ...toppings:string[]): string{
   return `${toppingDefault?.join(" and ")} along with ${toppings.join(",")} are added to your Sanwitch to make it special for you.`
   // return toppingDefault +"and "+ toppings.join(",")+ ' are added to your sandwitch';
}

let s1:string = sandwichMaker(toppingDefault,'chicken')
console.log(s1);
let s2:string = sandwichMaker(toppingDefault,'bbq','fish')
console.log(s2);
let s3:string = sandwichMaker(toppingDefault, 'vegitable', 'chicken')
console.log(s3);
let s4:string = sandwichMaker(toppingDefault)
console.log(s4);