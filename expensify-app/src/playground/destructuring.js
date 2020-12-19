//
// Destructing Objects
//

// const person = {
//     name: "James McNeil",
//     age: 47,
//     location: {
//         city: "Saltcoats",
//         temp: 10
//     }
// }
// const {name, age, } = person
// console.log(`${name} is ${age}`);

// const {city, temp } = person.location
// if(city && temp){
//     console.log(`it's ${temp} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
// console.log(book);
// const { name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName);


//
// Destructing Arrays
//
const address = ['25 Denny Crescent','Saltcoats','North Ayrshire','KA21 6GU']
const [, city, county ] = address
console.log(`You are in ${city}, ${county}`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75']
const [beverage,, medium] = item
console.log(`A medium ${beverage} costs ${medium}`);