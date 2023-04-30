/*40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album. */

function make_album(artistName:string, albumTitle:string, tracks?:number ) {
    if (tracks){
        return {artistName, albumTitle, tracks}
    } else {
        return {artistName, albumTitle}
    }
}
let album1:object = make_album('Sana','Joolay-lal',5)
console.log(album1);
let album2:object = make_album('Aana','Joolal')
console.log(album2);
let album3:object = make_album('Bana','Jolalolay',8)
console.log(album3);
let album4:object = make_album('Tana','Joolal')
console.log(album4);
