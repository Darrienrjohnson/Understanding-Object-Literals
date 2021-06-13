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
/*--------------------- Notes on lesson-----------------
* Javascript is referred to as an object based programming language meaning the language is made of different types of objects.
* Object is something that has properties and methods. Properties are like variables and methods are things the object can do or that can be done to the object.
* the point of this exercise is to learn to store and access related data.
* Two ways of storing data are 1. through assigning variable and 2. storing values in arrays. Javascript objects allow you to store data through key (property) value pairs. Objects are like single items that hold MULTIPLE variables through these property value pairs. 
* to begin assign an "Onject Literal" to a variable

const student = {}; 

*then we add data inside of the obejct 

const student = {
  name: "Quincy"
};

* the key is name and it acts as a variable and follows the same role a variable you can only use letters number $ and underscores.
* to access information in the properties in an object we can use bracket or dot notation 

student['name'] or student.name

*  pets.js is a data structure that holds the information about pets. 
* directory.js holds the program that reads and displays the data from pets.js. 
*We displace the directory file at the bottom of the page in script tags
*the html variable holds a string of html that contains a loop that will render out to the document or webpage page. 
* to access data-> array of obects -> properties in objects we use a for loop


let html= ' ';
for ( let i = 0; i < pets.length; i++){

}
* the loop runs the code between the curly braces {} once for each element in the pets array. Next we access the pets object. lets store that in a variable called pet.
    let pet = pets[i];
* we use bracket notation to access one item in the pets array and assign it to the variable pet. the pet variable to be assigned a new pets object every time the loop runs

* document.querySelector('main'); 

selects the main element inside index.html 
*once we have this refernce (also called node)to the main element established. we call the 

insertAdjacentHTML('beforeend', html);

method. it takes two arguments 1. a string instructing where inside main we want to insert the html and 2. and the actautl html string we want to insert inside of the main element. 
*
* you can also just assign the element to a variable 
const main = document.querySelector('main'); 
then call insertAdjacentHTML on that variable
*/
