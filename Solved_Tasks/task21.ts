/*
41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

let magicians_array: string[] =  ['peter','pakoo','coldbee','surpal']
function make_magician(magicians_array:string[]) {
    for (let magician = 0; magician < magicians_array.length; magician++) {
        const element = magicians_array[magician];
        console.log(`${element}`);
    }   
}

//console.log(make_magician(magicians_array));
/*
42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

let magicians_array1: string[] =  ['peter','pakoo','coldbee','surpal'];
function show_magician1(magicians_array1:string[]) {
    magicians_array1 = magicians_array1.map(i => 'Great ' + i);   
    return magicians_array1;
}

//console.log(show_magician1(magicians_array1));
/* 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */

let magicians_array2: string[] =  ['peter','pakoo','coldbee','surpal'];
function show_magician2(magicians_array2:string[]) {
    let newMagacian_array: string[] =[]
    for (let index = 0; index < magicians_array2.length; index++) {
        const element = magicians_array2[index];
        let magiciansName = 'Great ' + element; 
        newMagacian_array.push(magiciansName)
    }
    return newMagacian_array;
}

console.log('newMagacian_array',show_magician2(magicians_array2));
console.log('magician_array2',magicians_array2);