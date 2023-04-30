/*
36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
 */
function make_shirt(size, message) {
    console.log(`T-Shirt of Size: '${size}' would be printed with Message:'${message}'`);
}
//make_shirt('Large','Good Luck')
/*37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
function make_shirt1(size) {
    let default_message = 'I love TypeScript';
    let normal_message = 'Good Luck';
    if (size == 'large' || size == 'medium') {
        console.log(`T-Shirt of Size: '${size}' would be printed with Message:'${default_message}'`);
    }
    else {
        console.log(`T-Shirt of Size: '${size}' would be printed with Message:'${normal_message}'`);
    }
}
make_shirt1('large');
make_shirt1('small');
make_shirt1('medium');
make_shirt1('extra-small');
make_shirt1('extra-large');
/*38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country. */
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi');
describe_city('Lahore');
describe_city('Multan');
describe_city('Las Vagas', 'USA');
/*39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned. */
function city_country(city, country) {
    console.log(`"${city}, ${country}"`);
    return [city, country];
}
city_country('IStambol', 'Turkey');
city_country('Lahore', 'Paksitan');
city_country('Las Vagas', 'USA');
export {};
