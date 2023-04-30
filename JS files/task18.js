/*34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
 */
let pizza_array = ['BBQ', 'Vegitable', 'Pepperoni', 'Cheezeplus'];
for (let pizza = 0; pizza < pizza_array.length; pizza++) {
    const element = pizza_array[pizza];
    console.log(`I like ${element} pizza.`);
}
console.log(`I like ${pizza_array.join(",")} pizzas
Pizza is good to taste.
Pizza delicious to eat.
I really love pizza!`);
/*35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet! */
let animal_array = ['peiogen', 'parrrot', 'cockoo', 'sparrow'];
for (let animal = 0; animal < animal_array.length; animal++) {
    const element = animal_array[animal];
    console.log(`A ${element} would make a great pet.`);
}
console.log(`Any of  ${animal_array.join(",")}, would make a great pet.`);
export {};
