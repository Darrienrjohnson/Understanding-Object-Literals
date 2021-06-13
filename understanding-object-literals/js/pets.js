/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/
const pets = [
  {
    name: 'Joey',
    type: 'Dog',
    breed: 'Australian Shepherd',
    age: 8,
    photo: 'img/aussie.jpg'
  },

  /*-----Side Note----
*if we wanted to display the proties in this object we would use a for in loop

for (const prop in pets){
  console.log(`property: ${pets[prop]}`);
}
* just writing 

console.log( prop); 

*will display the actual properties in the object but writing

console.log(pets[prop]);

*will allow us to see the values of each property

TERMS
.values() returns an array of a given object's property values

.keys() method returns an array containing a given objects property names

  */
  { 
    name: 'Patches',
    type: 'Cat',
    breed: 'Domestic Shorthair',
    age: 1,
    photo: 'img/tabby.jpg'
  },
  { 
    name: 'Pugsley',
    type: 'Dog',
    breed: 'Pug',
    age: 6,
    photo: 'img/pug.jpg'
  },
  { 
    name: 'Simba',
    type: 'Cat',
    breed: 'Persian',
    age: 5,
    photo: 'img/persian.jpg'
  },
  { 
    name: 'Comet',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    photo: 'img/golden.jpg'
  }
];
