/*
45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 */

function carInfo(manufacturer: string ,model: string , ...arg:string[]){
    if(arg.length == 3){
        return {"manufacturer": manufacturer,
            "model": model,
            "color": arg[0],
            "engine":arg[1],
            "purchase":arg[2]}
    } else if (arg.length == 2){
        return {"manufacturer": manufacturer,
            "model": model,
            "color": arg[0],
            "engine":arg[1],}
    } else if(arg.length == 1) {
        return {"manufacturer": manufacturer,
        "model": model,
        "color": arg[0],}
    } else {
        return {"manufacturer": manufacturer,
                "model": model,}
    }

}

var info: object = carInfo('BMW','Kompressor','Red')
console.log(info);
var info: object = carInfo('BMW','Kompressor','Red','450Ek')
console.log(info);
var info: object = carInfo('BMW','Kompressor','Red','450Ek','10-2-2006')
console.log(info);
